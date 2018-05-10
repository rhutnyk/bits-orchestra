import * as React from "react";

import * as firebase from 'firebase';
import { getData, changeFirstName, changeLastName } from "../../Actions/actions";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Confirm } from '../../Services/Notification/Notification';
import './FireBase.css';



class FireBase extends React.Component<any> {

  public componentWillMount() {
    const { getDataProp } = this.props;
    const ref = firebase.database().ref();
    ref.on('value', (res) => {
      getDataProp(res ? res.val() : '')
    })
  }

  public addToFireBase = () => {
    if (this.props.firstName && this.props.lastName) {
      firebase.database().ref('users').push(
        {
          firstname: this.props.firstName,
          lastname: this.props.lastName,
        }
      )
      this.props.changeFirstNameProp('')
      this.props.changeLastNameProp('')
    } else {
      alert('fields should not be empty !!!')
    }
  }

  public deleteItem = (id: any) => {
    Confirm('Delete this item ?')
      .then((res: any) => {
        if (res) {
          const ref = firebase.database().ref('users');
          ref.child(id).remove();
        }
      }
      )
  }

  render() {
    const { firstName, lastName, data, changeFirstNameProp, changeLastNameProp } = this.props;
    let a: any = [];
    if (data && data.users) {
      a = Object.keys(data.users);
    }
    return (
      <div className="data-page">

        <div className="form-group">
          <input type="text" placeholder="First name"
            className="form-control"
            value={firstName}
            onChange={(event) => { changeFirstNameProp(event.target.value) }}
          />
          <input type="text" placeholder="Last name"
            className="form-control"
            value={lastName}
            onChange={(event) => { changeLastNameProp(event.target.value) }}
          />
          <button className="btn btn-primary" onClick={this.addToFireBase}>Add to base</button>
        </div>

        <div className="item">
          
              <table className="table table-hover table-dark">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">First</th>
                  <th scope="col">Last</th>
                  <th scope="col">Full</th>
                  <th scope="col">Delete</th>
                </tr>
              </thead>
              <tbody>
             {
              a.map((key: any, index: number) =>
                <tr key={index}>
                  <th scope="row">{index+1}</th>
                  <td>{data.users[key].firstname}</td>
                  <td>{data.users[key].lastname}</td>
                  <td>{`${data.users[key].firstname} ${data.users[key].lastname}`}</td>
                  <td className="td-table-last"> <button className="delete-item" onClick={() => this.deleteItem(key)}>x</button></td>
                </tr>
              )}
              
              </tbody>
            </table>
          { 
             a.map((key: any, index: number) =>
               <span key={index}>
                 <p className="p-item"  >{`${data.users[key].firstname} ${data.users[key].lastname}`}
                  <br />
                   <button className="delete-item" onClick={() => this.deleteItem(key)}>x</button>
               </p>
               </span>
            
             )}
         
         
        </div>
      </div>
    )
  }
}

const putStateToProps = (state: any) => {
  return {
    data: state.data,
    firstName: state.firstName,
    lastName: state.lastName,
  }
}

const putActionsToProps = (dispatch: any) => {
  return {
    changeFirstNameProp: bindActionCreators(changeFirstName, dispatch),
    changeLastNameProp: bindActionCreators(changeLastName, dispatch),
    getDataProp: bindActionCreators(getData, dispatch),
  }
}

export default connect(putStateToProps, putActionsToProps)(FireBase);



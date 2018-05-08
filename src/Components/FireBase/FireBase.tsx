import * as React from "react";

import * as firebase from 'firebase';
import { getData, changeFirstName, changeLastName } from "../../Actions/actions";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
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
      // const id = this.props.data.length;
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
    const a = confirm('Delete this item ?')
    if (a) {
      const ref = firebase.database().ref('users');
      ref.child(id).remove();
    }
}

  render() {
    const { firstName, lastName, data, changeFirstNameProp, changeLastNameProp } = this.props;
  let a: any = [];
  if (data && data.users) {
    a = Object.keys(data.users);
  }    
    return (
      <div className="data-page">
        <div className="form">
          <input type="text" placeholder="First name"
            value={firstName}
            onChange={(event) => { changeFirstNameProp(event.target.value) }}
          />
          <input type="text" placeholder="Last name"
            value={lastName}
            onChange={(event) => { changeLastNameProp(event.target.value) }}
          />
          <button onClick={this.addToFireBase}>Add to base</button>
        </div>
        
        <div className="item">
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



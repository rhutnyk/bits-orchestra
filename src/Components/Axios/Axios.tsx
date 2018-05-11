import * as React from 'react';
import './Axios.css';
import { GET_DATA } from '../../Services/GetData/GetData';


class Axios extends React.Component {

  data: any = [];
  urls: any = [
    'api.github.com/users/rhutnyk',
    'api.github.com/users/webprofit',
    'api.github.com/users/cyanharlow',
    'api.github.com/users/elc1798',
    'api.github.com/users/zcdev',
    'api.github.com/users/sallar',
    'api.github.com/users/catalinmiron',

  ]
  getDataClick = () => {
    GET_DATA(this.urls)
      .then(res => {
        this.data = res;
        this.forceUpdate();
      })
      .catch(err => console.log(err))

  }

  render() {
    return (
      <div className='row'>
        <div className="container">
        <div className="list">
        <i className="fab fa-github bg-git"/>
          { 
            this.urls.map((el:any, index:number) => 
          <p key={index}><i className="fab fa-github"/> - {el}</p>
        )
          }
        </div>

          {
            this.data.length>0 ?

              <table className="table table-hover table-axios">
                <thead>
                  <tr>
                    <th scope="col">Avatar</th>
                    <th scope="col">ID</th>
                    <th scope="col">Name</th>
                    <th scope="col">login</th>
                    <th scope="col">Company</th>
                    <th scope="col">Created</th>
                    <th scope="col">Location</th>
                    <th scope="col">Link to github</th>
                  </tr>
                </thead>
                <tbody>
                  {this.data.map((el:any, index: number) => 
                    <tr key={index}>
                      <td className="td-photo"><img src={el.data.avatar_url} alt="photo" /></td>
                      <td>{el.data.id}</td>
                      <td>{el.data.name}</td>
                      <td>{el.data.login}</td>
                      <td>{el.data.company}</td>
                      <td>{el.data.created_at}</td>
                      <td>{el.data.location}</td>
                      <td><a href={el.data.html_url} target="_blank">Link</a></td>
                    </tr>

                  )}

                </tbody>
              </table>
              :
              <button className="btn btn-primary" onClick={this.getDataClick}>Get data from GitHub</button>
          }
        </div>
      </div>

    )
  }
}

export default Axios
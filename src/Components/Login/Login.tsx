import * as React from 'react';
import * as firebase from 'firebase';
import './Login.css';
import IMG from '../../img/b-o.png';


class Login extends React.Component<any> {

    userMail: string = '';
    userPass: string = '';

    changeMail(e: any) {
        this.userMail = e;
    }

    changePass(e: any) {
        this.userPass = e;
    }

    Login = (e?: any) => {
        e.preventDefault();
        firebase.auth().signInWithEmailAndPassword(this.userMail, this.userPass)
            .catch(err => console.log('err', err.message))
    }

    Registration = (e?: any) => {
        e.preventDefault();
        firebase.auth().createUserWithEmailAndPassword(this.userMail, this.userPass)
            .catch(err => console.log('err', err.message))
    }

    render() {

        return (
            <div className="login-page">
                <img src={IMG} />
                <div className="form">
                    <form>
                        <div className="form-group">
                            <label >Email address</label>
                            <input id="email" className="form-control" onChange={(event) => this.changeMail(event.target.value)} type="text" placeholder="Email" required={true} />
                        </div>
                        <div className="form-group">
                            <label >Password</label>
                            <input id="password" className="form-control" onChange={(event) => this.changePass(event.target.value)} type="password" placeholder="Password" required={true} />
                        </div>

                        <button className="btn btn-info" onClick={this.Login}>Sign In</button>
                        <button className="btn btn-danger" onClick={this.Registration}>Registration</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default Login

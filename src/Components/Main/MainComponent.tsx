
import * as React from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import * as firebase from 'firebase';
import Testimonials from '../Testimonials/Testimonial.List';
import Menu from '../Menu/Menu';
import './Main.css';
import AddTestimonial from "../AddTestimonial/AddTestimonial";
import FireBase from '../FireBase/FireBase';
import Login from "../Login/Login";
import Axios from "../Axios/Axios";

const config = {
  apiKey: "AIzaSyBLipUJoYBFLHtUwV8QXVtGA1yGhJks2fE",
  authDomain: "bits-test-007007.firebaseapp.com",
  databaseURL: "https://bits-test-007007.firebaseio.com",
  messagingSenderId: "945585213034",
  projectId: "bits-test-007007",
  storageBucket: "",
}
firebase.initializeApp(config);


class MainComponent extends React.Component {

  loggedIn: boolean;
  userEmail: string;

  LogOut = () => {
    firebase.auth().signOut()
    this.forceUpdate()
  }

  componentWillMount() {
    firebase.auth().onAuthStateChanged((user) => {

      if (user) {
        this.loggedIn = true;
        this.userEmail = user.email ? user.email : '';
        this.forceUpdate()
      } else {
        this.loggedIn = false;
        this.forceUpdate()
      }
    })
  }

  render() {

    return (
      <Router >
        <div>
          <div className="App">
            <header className="App-header">
              <h1 className="App-title">Welcome to React</h1>
              <button className="btn btn-outline-secondary" onClick={this.LogOut}>Sign out  <i className="fas fa-sign-out-alt" /></button>
              <p className="userMail">{this.userEmail}</p>
              <Menu />
            </header>
            <div className="content">
              <Route render={() => (
                this.loggedIn ? (
                  <Switch>
                    <Route exact={true} path="/" component={Testimonials} />
                    <Route path="/addTestimonial" component={AddTestimonial} />
                    <Route path="/data" component={FireBase} />
                    <Route path="/axios" component={Axios} />
                    <Route exact={true} path="/*" component={Testimonials} />
                  </Switch>
                ) : (
                    <Login />
                  )
              )} />
            </div>
          </div>
        </div>
      </Router>
    )
  }
}



export default MainComponent;
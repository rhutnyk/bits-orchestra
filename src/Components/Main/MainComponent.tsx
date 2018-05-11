
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
import Gallery from "../Gallery/Gallery";

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

  message: boolean;
  animation: boolean;
  moment: number;
  scrolling: boolean;
  loggedIn: boolean;
  userEmail: string;

  LogOut = () => {
    firebase.auth().signOut()
    this.forceUpdate()
  }

  onScroll = () => {
    this.scrolling = (window.scrollY > this.moment)
    this.moment = window.scrollY
    this.forceUpdate();
  }

  componentWillMount() {
    window.addEventListener('scroll', this.onScroll, false);
    firebase.auth().onAuthStateChanged((user) => {

      if (user) {
        this.loggedIn = true;
        this.userEmail = user.email || '';
        this.forceUpdate()
      } else {
        this.loggedIn = false;
        this.forceUpdate()
      }
    })
  }

  onMouseEnterHandler = () => {
    this.scrolling = false;
    this.forceUpdate()
  }

  stopAnimation = () => {
    this.animation = !this.animation;
    this.forceUpdate()
  }

  showMessage = () => {
    this.message = !this.message;
    this.forceUpdate()
  }


  render() {

    return (
      <Router >
        <div>
          <div className="App">

            <header className={`App-header ${this.scrolling ? 'min-header' : 'max-header'}`}
              onMouseEnter={this.onMouseEnterHandler}
            >
              <h1 className="App-title">
            {
              this.message? <p className="mess">Click for animation</p>:''
            }
                <span 
                onClick={this.stopAnimation} className={`${!this.animation ? 'back' : 'no-animation'}  ${this.scrolling ? 'min-back' : ''}`}
                onMouseEnter={this.showMessage}
                onMouseLeave={this.showMessage} 
                >
                  <span>R</span>
                  <span>E</span>
                  <span>A</span>
                  <span>C</span>
                  <span>T</span>
                </span>
              </h1>
              <button className="btn btn-outline-secondary" onClick={this.LogOut}>Sign out  <i className="fas fa-sign-out-alt" /></button>
              <p className={`${this.scrolling ? 'min-header-mail' : 'max-header-mail'}`}>{this.userEmail}</p>
              {
                !this.scrolling ?
                  <Menu /> : ''
              }
            </header>

            <div className="content">
              <Route render={() => (
                this.loggedIn ? (
                  <Switch>
                    <Route exact={true} path="/" component={Testimonials} />
                    <Route path="/addTestimonial" component={AddTestimonial} />
                    <Route path="/data" component={FireBase} />
                    <Route path="/axios" component={Axios} />
                    <Route path="/gallery" component={Gallery} />
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
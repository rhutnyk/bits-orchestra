
import * as React from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import * as firebase from 'firebase';
import Testimonials from '../Testimonials/Testimonial.List';
import Menu from '../Menu/Menu';
import './Main.css';
import AddTestimonial from "../AddTestimonial/AddTestimonial";
import FireBase from '../FireBase/FireBase';
import Login from "../Login/Login";


const config = {
  apiKey: "AIzaSyBLipUJoYBFLHtUwV8QXVtGA1yGhJks2fE",
  authDomain: "bits-test-007007.firebaseapp.com",
  databaseURL: "https://bits-test-007007.firebaseio.com",
  messagingSenderId: "945585213034",
  projectId: "bits-test-007007",
  storageBucket: "",
}

firebase.initializeApp(config);




// ---------------------------------------------------------------------

// const tokenDivId = 'token_div';
// const permissionDivId = 'permission_div';
// // [START refresh_token]
// // Callback fired if Instance ID token is updated.
// messaging.onTokenRefresh(() => {
//   messaging.getToken()
//     .then((refreshedToken) => {
//       // console.log('Token refreshed.');
//       // Indicate that the new Instance ID token has not yet been sent to the
//       // app server.
//       setTokenSentToServer(false);
//       // Send Instance ID token to app server.
//       sendTokenToServer(refreshedToken);
//       // [START_EXCLUDE]
//       // Display new Instance ID token and clear UI of all previous messages.
//       resetUI();
//       // [END_EXCLUDE]
//     }).catch((err) => {
//       // console.log('Unable to retrieve refreshed token ', err);
//       showToken(err);
//     });
// });
// // [END refresh_token]
// // [START receive_message]
// // Handle incoming messages. Called when:
// // - a message is received while the app has focus
// // - the user clicks on an app notification created by a service worker
// //   `messaging.setBackgroundMessageHandler` handler.
// messaging.onMessage((payload) => {
//   // console.log('Message received. ', payload);
//   // [START_EXCLUDE]
//   // Update the UI to include the received message.
//   appendMessage(payload);
//   // [END_EXCLUDE]
// });
// // [END receive_message]
// function resetUI() {
//   // clearMessages();
//   showToken('loading...');
//   // [START get_token]
//   // Get Instance ID token. Initially this makes a network call, once retrieved
//   // subsequent calls to getToken will return from cache.

// messaging.getToken()
//     .then((currentToken) => {
//       if (currentToken) {
//         sendTokenToServer(currentToken);
//         updateUIForPushEnabled(currentToken);
//       } else {
//         // Show permission request.
//         // console.log('No Instance ID token available. Request permission to generate one.');
//         // Show permission UI.
//         updateUIForPushPermissionRequired();
//         setTokenSentToServer(false);
//       }
//     }).catch((err) => {
//       // console.log('An error occurred while retrieving token. ', err);
//       showToken(err);
//       setTokenSentToServer(false);
//     });
//   // [END get_token]
// }
// function showToken(currentToken) {
//   // Show token in console and UI.
//   const tokenElement = document.querySelector('#token');
//   if (tokenElement) {
//     tokenElement.textContent = currentToken;
//   }
// }
// // Send the Instance ID token your application server, so that it can:
// // - send messages back to this app
// // - subscribe/unsubscribe the token from topics
// function sendTokenToServer(currentToken) {
//   if (!isTokenSentToServer()) {
//     // console.log('Sending token to server...');
//     // TODO(developer): Send the current token to your server.
//     setTokenSentToServer(true);
//   } else {
//     // console.log('Token already sent to server so won\'t send it again ' +
//     // 'unless it changes')
//   }
// }
// function isTokenSentToServer() {
//   return window.localStorage.getItem('sentToServer') === 1;
// }
// function setTokenSentToServer(sent) {
//   window.localStorage.setItem('sentToServer', sent ? 1 : 0);
// }
// function showHideDiv(divId, show) {
//   const div = document.querySelector('#' + divId);
//   if (show) {
//     div.style = 'display: visible';
//   } else {
//     div.style = 'display: none';
//   }
// }
// function requestPermission() {
//   // console.log('Requesting permission...');
//   // [START request_permission]
//   messaging.requestPermission()
//     .then(() => {
//       // console.log('Notification permission granted.');
//       // TODO(developer): Retrieve an Instance ID token for use with FCM.
//       // [START_EXCLUDE]
//       // In many cases once an app has been granted notification permission, it
//       // should update its UI reflecting this.
//       resetUI();
//       // [END_EXCLUDE]
//     }).catch((err) => {
//       // console.log('Unable to get permission to notify.', err);
//     });
//   // [END request_permission]
// }
// function deleteToken() {
//   // Delete Instance ID token.
//   // [START delete_token]
//   messaging.getToken()
//     .then((currentToken) => {
//       messaging.deleteToken(currentToken)
//         .then(() => {
//           // console.log('Token deleted.');
//           setTokenSentToServer(false);
//           // [START_EXCLUDE]
//           // Once token is deleted update UI.
//           resetUI();
//           // [END_EXCLUDE]
//         }).catch((err) => {
//           // console.log('Unable to delete token. ', err);
//         });
//       // [END delete_token]
//     }).catch((err) => {
//       // console.log('Error retrieving Instance ID token. ', err);
//       showToken(err);
//     });
// }
// // Add a message to the messages element.
// function appendMessage(payload) {
//   const messagesElement = document.querySelector('#messages');
//   const dataHeaderELement = document.createElement('h5');
//   const dataElement = document.createElement('pre');
//   dataElement.style = 'overflow-x:hidden;';
//   dataHeaderELement.textContent = 'Received message:';
//   dataElement.textContent = JSON.stringify(payload, null, 2);
//   messagesElement.appendChild(dataHeaderELement);
//   messagesElement.appendChild(dataElement);
// }
// // Clear the messages element of all children.
// // function clearMessages() {
// //   const messagesElement = document.querySelector('#messages');
// //   while (messagesElement.hasChildNodes()) {
// //     messagesElement.removeChild(messagesElement.lastChild);
// //   }
// // }
// function updateUIForPushEnabled(currentToken) {
//   showHideDiv(tokenDivId, true);
//   showHideDiv(permissionDivId, false);
//   showToken(currentToken);
// }
// function updateUIForPushPermissionRequired() {
//   showHideDiv(tokenDivId, false);
//   showHideDiv(permissionDivId, true);
// }
// resetUI();



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
        // console.log(user ? user.email : '');

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

          {/* MESSAGING */}
          {/* <div className="demo-layout mdl-layout mdl-js-layout mdl-layout--fixed-header">


            <header className="mdl-layout__header mdl-color-text--white mdl-color--light-blue-700">
              <div className="mdl-cell mdl-cell--12-col mdl-cell--12-col-tablet mdl-grid">
                <div className="mdl-layout__header-row mdl-cell mdl-cell--12-col mdl-cell--12-col-tablet mdl-cell--8-col-desktop">
                  <h3>Firebase Cloud Messaging</h3>
                </div>
              </div>
            </header>

            <main className="mdl-layout__content mdl-color--grey-100">
              <div className="mdl-cell mdl-cell--12-col mdl-cell--12-col-tablet mdl-grid">


                <div className="mdl-card mdl-shadow--2dp mdl-cell mdl-cell--12-col mdl-cell--12-col-tablet mdl-cell--12-col-desktop">
                  <div className="mdl-card__supporting-text mdl-color-text--grey-600">
                    <div id="token_div" style={{ display: 'none' }}>
                      <h4>Instance ID Token</h4>
                      <p id="token" style={{ wordBreak: 'break-all' }} />
                      <button className="mdl-button mdl-js-button mdl-button--raised mdl-button--colored"
                        onClick={deleteToken()}>Delete Token</button>
                    </div>

                    <div id="permission_div" style={{ display: 'none' }}>
                      <h4>Needs Permission</h4>
                      <p id="token" />
                      <button className="mdl-button mdl-js-button mdl-button--raised mdl-button--colored"
                        onClick={requestPermission()}>Request Permission</button>
                    </div>
                    <div id="messages" />
                  </div>
                </div>

              </div>
            </main>
          </div> */}


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
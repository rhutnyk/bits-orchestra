import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './index.css';
// import registerServiceWorker from './registerServiceWorker';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { rootReducer } from './Reducers/reducer';
import MainComponent from './Components/Main/MainComponent';
import * as firebase from 'firebase';

const config = {
  apiKey: "AIzaSyBLipUJoYBFLHtUwV8QXVtGA1yGhJks2fE",
  authDomain: "bits-test-007007.firebaseapp.com",
  databaseURL: "https://bits-test-007007.firebaseio.com",
  messagingSenderId: "945585213034",
  projectId: "bits-test-007007",
  storageBucket: "",
}

firebase.initializeApp(config);
const auth = firebase.auth();

export let UID: string;

// const CREATE_ID = () => {
//   return '_' + Math.random().toString(36).substr(2, 10);
// };

// public deleteItem = (id: any) => {
//   const ref = firebase.database().ref('data');
//   ref.child(id).remove();
// }



auth.signInWithEmailAndPassword('webprofit4@gmail.com', 'Profitroli22')
// .then(res => UID = res.uid)



export const store: any = createStore(rootReducer);

ReactDOM.render(
  <Provider store={store}>
    <MainComponent />
  </Provider>,
  document.getElementById('root') as HTMLElement
);
// registerServiceWorker();

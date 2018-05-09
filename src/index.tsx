import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './index.css';

// import registerServiceWorker from './registerServiceWorker';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { rootReducer } from './Reducers/reducer';
import MainComponent from './Components/Main/MainComponent';



// const CREATE_ID = () => {
//   return '_' + Math.random().toString(36).substr(2, 10);
// };




export const store: any = createStore(rootReducer);

ReactDOM.render(
  <Provider store={store}>
    <MainComponent />
  </Provider>,
  document.getElementById('root') as HTMLElement
);
// registerServiceWorker();

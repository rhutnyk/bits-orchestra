import * as React from 'react';
import * as ReactDOM from 'react-dom';
// import App from './App';
import './index.css';
// import registerServiceWorker from './registerServiceWorker';
import MainComponent from './Components/MainComponent';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { rootReducer } from './Reducers/reducer';

export const store: any = createStore(rootReducer);



ReactDOM.render(
  <Provider store={store}>
    <MainComponent />
  </Provider>,
  document.getElementById('root') as HTMLElement
);
// registerServiceWorker();

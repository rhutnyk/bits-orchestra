import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './index.css';
// import './Components/Main/Main.css'

import { BrowserRouter as Router, Route } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';

import Header from './Components/Header/Header';
import MainComponent from './Components/Main/MainComponent';
import BlogList from './Components/BlogDetails/Blog-list';
import BlogDetails from './Components/BlogDetails/Blog-details';
import Footer from './Components/Footer/Footer';



ReactDOM.render(
  <Router >
    <div className="App">
    <Header />
        <Route exact={true} path='/' component={MainComponent} />
        <Route exact={true} path='/blogs' component={BlogList} />
        <Route  path='/blogs/:id' component={BlogDetails} />
        <Footer />
        </div>
  </Router >,

  document.getElementById('root') as HTMLElement
);
registerServiceWorker();

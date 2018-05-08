
import * as React from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Testimonials  from '../Testimonials/Testimonial.List';
import Menu from '../Menu/Menu';
import './Main.css';
import AddTestimonial from "../AddTestimonial/AddTestimonial";
import FireBase from '../FireBase/FireBase';


class MainComponent extends React.Component<any> {
  render() {
    return (
      <Router>
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>   
          <Menu/>
        </header>
        <div className="content">

          <Switch>
            <Route exact={true} path="/" component={Testimonials} />
            <Route path="/addTestimonial" component={AddTestimonial} />
            <Route path="/data" component={FireBase} />
            <Route path="/*" component={Testimonials} />
          </Switch>
        
        </div>
      </div>
      </Router>
    )
  }
}



export default MainComponent;
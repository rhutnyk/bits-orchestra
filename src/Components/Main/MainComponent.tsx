
import * as React from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import Testimonials from '../Testimonials/Testimonial.List';
import './Main.css';


// const config = {
//   apiKey: "AIzaSyBLipUJoYBFLHtUwV8QXVtGA1yGhJks2fE",
//   authDomain: "bits-test-007007.firebaseapp.com",
//   databaseURL: "https://bits-test-007007.firebaseio.com",
//   messagingSenderId: "945585213034",
//   projectId: "bits-test-007007",
//   storageBucket: "",
// }
// firebase.initializeApp(config);


class MainComponent extends React.Component {

  render() {

    return (
      <Router >

        <div className="App">

          <header >
            header
            </header>

          <div className="content">

            <Switch>
              <Route exact={true} path="/"  />
              {/* <Route path="/addTestimonial" component={AddTestimonial} /> */}

              {/* <Route exact={true} path="/*" component={Testimonials} /> */}
            </Switch>

          </div>

          <footer>
            footer
            </footer>
        </div>

      </Router>
    )
  }
}



export default MainComponent;
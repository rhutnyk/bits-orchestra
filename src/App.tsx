import * as React from 'react';
import './App.css';
// import { Testimonial } from './ContentTypes/Testimonial';
import * as Client from './Client';

import logo from './logo.svg';

class App extends React.Component<any, any> {

  constructor(props: React.ReactPropTypes) {
    super(props);
    this.state = {
      testimonials: []
    };
  }

  public componentDidMount() {
    Client.default.items()
      .equalsFilter('system.type', 'testimonial')
      .get()
      // .subscribe((response) => {
      //   console.log(response)});
  }

  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;

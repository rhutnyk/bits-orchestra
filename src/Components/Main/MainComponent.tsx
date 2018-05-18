
import * as React from "react";
import { BrowserRouter as Router } from 'react-router-dom';

import './Main.css';

import SliderMain from "../Sliders/SliderMain";
import Header from "../Header/Header";
import Cms from "../CMS/Cms";
import Services from "../Services/Services";
import About from "../About/About";
import Quote from "../Quote/Quote";
import Blogs from "../Blogs/Blogs";
import Feedbacks from "../Feedbacks/Feedbacks";
import Gallery from "../Gallery/Gallery";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";




class MainComponent extends React.Component {


  render() {

    return (
      <Router >

        <div className="App">
          <Header />

          <div id="home">
            <SliderMain />
          </div>

          <div id="services" className="content">
            <Services />
          </div>

          <div id="cms" >
            <Cms />
          </div>

          <div id="about" >
            <About />
            <Quote />
          </div>

          <div id="blogs" className="content">
            <Blogs />
          </div>

          <div id="feedbacks">
            <Feedbacks />
            <Gallery />
          </div>

          <div id="contact" className="content">
            <Contact />
          </div>

          <Footer />

        </div>
      </Router>
    )
  }
}



export default MainComponent;
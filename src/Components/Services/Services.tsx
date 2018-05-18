import * as React from "react";
import './services.css';
import SliderItem from "../Sliders/SliderItem";

class Services extends React.Component {
  

    render() {

        return (
            <div className="services">
              <div className="blur1" />
              <div className="blur2" />
              <div className="header-section">
                <span className="title-section">Our services</span> <br />
                <span className="title-section-sub">What we do</span>
              </div>
              <SliderItem />
            </div>
        )
    }
}


export default Services
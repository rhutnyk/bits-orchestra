import * as React from "react";
import './services.css';
import SliderItem from "../Sliders/SliderItem";

interface IState {
    blogPosts: any[],
    blogDetails: any,
}

export default class Services extends React.Component<any, IState> {
  

    render() {

        return (
            <div className="services">
              {/* <div className="blur1" />
              <div className="blur2" /> */}
              <div className="header-section">
                <span className="title-section">Our services</span> <br />
                <span className="title-section-sub">What we do</span>
              </div>
              <SliderItem />
            </div>
        )
    }
}


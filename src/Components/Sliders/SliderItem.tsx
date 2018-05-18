import * as React from "react";

import './slider.css';

import Slider from "react-slick";


class SliderItem extends React.Component {

    render() {

        const settings = {
            adaptiveHeight: true,
            autoplay: true,
            infinite: true,
            slidesToScroll: 1,
            slidesToShow: 5,
            speed: 1000,
            swipeToSlide: true,
            variableWidth: true,
        };

        return (
            <div className="carusel">
                <Slider {...settings}>

                    <div>
                        <div className="item-slide">
                            <i className="fa fa-laptop" aria-hidden="true" /> <br />
                            <span className="item-header">Responsive design</span><br />
                            <p className="item-text">Your site will work as an application with Single Page Application approach</p>
                        </div>
                    </div>
                    <div>
                        <div className="item-slide">
                            <i className="fab fa-connectdevelop" /> <br />
                            <span className="item-header">Responsive design</span><br />
                            <p className="item-text">Your site will work as an application with Single Page Application approach</p>
                        </div>
                    </div>
                    <div>
                        <div className="item-slide">
                            <i className="fa fa-laptop" aria-hidden="true" /> <br />
                            <span className="item-header">Responsive design</span><br />
                            <p className="item-text">Your site will work as an application with Single Page Application approach</p>
                        </div>
                    </div>
                    <div>
                        <div className="item-slide">
                            <i className="fa fa-laptop" aria-hidden="true" /> <br />
                            <span className="item-header">Responsive design</span><br />
                            <p className="item-text">Your site will work as an application with Single Page Application approach</p>
                        </div>
                    </div>
                    <div>
                        <div className="item-slide">
                            <i className="fa fa-laptop" aria-hidden="true" /> <br />
                            <span className="item-header">Responsive design</span><br />
                            <p className="item-text">Your site will work as an application with Single Page Application approach</p>
                        </div>
                    </div>
                    <div>
                        <div className="item-slide">
                            <i className="fa fa-laptop" aria-hidden="true" /> <br />
                            <span className="item-header">Responsive design</span><br />
                            <p className="item-text">Your site will work as an application with Single Page Application approach</p>
                        </div>
                    </div>
                </Slider>
            </div>
        )
    }

}


export default SliderItem
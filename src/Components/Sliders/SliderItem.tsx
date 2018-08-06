import * as React from "react";

import './slider.css';

import Slider from "react-slick";


class SliderItem extends React.Component {

    render() {

        const settings = {
            adaptiveHeight: true,
            autoplay: true,
            infinite: true,
            pauseOnHover: false,
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
                            <p className="item-text">Compatible with various desktop, tablet, and mobile devices</p>
                        </div>
                    </div>
                    <div>
                        <div className="item-slide">
                            <i className="fas fa-th-large" /> <br />
                            <span className="item-header">.NET</span><br />
                            <p className="item-text">Development all range of .NET-based application</p>
                        </div>
                    </div>
                    <div>
                        <div className="item-slide">
                            <i className="fas fa-mobile-alt" aria-hidden="true" /> <br />
                            <span className="item-header">Mobile Native Apps</span><br />
                            <p className="item-text">Development of application for Apple and Android</p>
                        </div>
                    </div>
                    <div>
                        <div className="item-slide">
                            <i className="fas fa-desktop" aria-hidden="true" /> <br />
                            <span className="item-header">Client application</span><br />
                            <p className="item-text">Your site will work as an application with Single Page Application approach</p>
                        </div>
                    </div>
                    <div>
                        <div className="item-slide">
                            <i className="fas fa-cloud-upload-alt" aria-hidden="true" /> <br />
                            <span className="item-header">Cloud Infrastructure</span><br />
                            <p className="item-text">Deployment to Microsort Azure and other cloud platforms</p>
                        </div>
                    </div>
                    <div>
                        <div className="item-slide">
                            <i className="fas fa-leaf" aria-hidden="true" /> <br />
                            <span className="item-header">Clean design</span><br />
                            <p className="item-text">Elegant layouts that help you organize your content in the best manner</p>
                        </div>
                    </div>
                    <div>
                        <div className="item-slide">
                            <i className="fas fa-sun" aria-hidden="true" /> <br />
                            <span className="item-header">Kentico CMS</span><br />
                            <p className="item-text">Full stack service for Kentico web sites</p>
                        </div>
                    </div>
                    <div>
                        <div className="item-slide">
                            <i className="fab fa-html5" aria-hidden="true" /> <br />
                            <span className="item-header">HTML5 & CSS3</span><br />
                            <p className="item-text">Building rich and modern user interface with HTML5 and CSS3, SEO optimised</p>
                        </div>
                    </div>
                </Slider>
            </div>
        )
    }

}


export default SliderItem
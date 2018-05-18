import * as React from "react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";

import foto1 from '../../img/slider/slide1.jpg';
import foto2 from '../../img/slider/slide2.jpg';
import foto3 from '../../img/slider/slide3.jpg';

class SliderMain extends React.Component {


    render() {

        const settings2 = {
            adaptiveHeight: true,
            autoplay: true,
            dots: true,
            infinite: true,
            pauseOnHover: false,
            slidesToScroll: 1,
            slidesToShow: 1,
            speed: 1000,
            swipeToSlide: true,
            // variableWidth: true,
        };

        return (
            <Slider {...settings2}>
                <div>
                    <img src={foto1} />
                </div>
                <div>
                    <img src={foto2} />
                </div>
                <div>
                    <img src={foto3} />
                </div>
                <div>
                    <img src={foto1} />
                </div>
                <div>
                    <img src={foto2} />
                </div>
                <div>
                    <img src={foto3} />
                </div>
            </Slider>
        )
    }

}


export default SliderMain
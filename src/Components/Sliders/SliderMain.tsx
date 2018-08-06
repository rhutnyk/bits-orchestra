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
          
                <Slider  {...settings2}>
                    <div className='slide-main-item'>
                        <h3>With any device you prefer...</h3>
                        <img src={foto1} />
                    </div>
                    <div className='slide-main-item'>
                    <h3>whatever infrastructure you need...</h3>
                        <img src={foto2} />
                    </div>
                    <div className='slide-main-item'>
                    <h3>will help you to make the best choice...</h3>
                        <img src={foto3} />
                    </div>
                    <div className='slide-main-item'>
                    <h3>to ensure your business grows...</h3>
                        <img src={foto1} />
                    </div>
                    <div className='slide-main-item'>
                    <h3>because your success is our goal!</h3>
                        <img src={foto2} />
                    </div>
                </Slider>
           
        )
    }

}


export default SliderMain
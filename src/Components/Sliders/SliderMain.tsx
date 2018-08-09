import * as React from "react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";
import DataService from "../../common/services/DataService";


interface IState {
    mainSliders: any[],
}

class SliderMain extends React.Component<any, IState> {

    private dataSvc: DataService = new DataService('system.type=heroslideritem');

    constructor(props: any) {
        super(props)

        this.state = {
            mainSliders: [],
        }
    }

    componentDidMount() {
        this.dataSvc.query()
            .then(res => {
                this.setState({ mainSliders: res.items });
            })
    }


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
                {
                    this.state.mainSliders.map((element, i) =>
                        <div key={i} className='slide-main-item'>
                            <h3>{element.elements.title.value}</h3>
                            <img src={element.elements.image.value[0].url} />
                        </div>
                    )
                }  
            </Slider>

        )
    }

}


export default SliderMain
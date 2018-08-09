import * as React from "react";
import './slider.css';
import Slider from "react-slick";
import DataService from "../../common/services/DataService";

interface IState {
    dataServices: any[],
}

export default class SliderItem extends React.Component<any, IState> {

    private dataSvc: DataService = new DataService('system.type=service');

    constructor(props: any) {
        super(props)

        this.state = {
            dataServices: [],
        }
    }


    componentDidMount() {
        this.dataSvc.query()
            .then(res => {
                this.setState({ dataServices: res.items });
            })
    }

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
                    {
                        this.state.dataServices.map((element, i) =>
                            <div key={i}>
                                <div className="item-slide">
                                <div className="service-icon">
                                    <i className={`${element.elements.iconcssclass.value} iconBig`} aria-hidden="true" /> <br />
                                </div>
                                    <span className="item-header">{element.elements.title.value}</span><br />
                                    <p className="item-text">{element.elements.description.value}</p>
                                </div>
                            </div>
                        )
                    }
                </Slider>
            </div>
        )
    }

}



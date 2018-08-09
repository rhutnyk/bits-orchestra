import * as React from "react";
import './feedbacks.css';
import Slider from "react-slick";

import bg from '../../img/tree.jpg';
import DataService from "../../common/services/DataService";

interface IState {
    testimonials: any[],
}

class Feedbacks extends React.Component<any, IState> {

    private dataSvc: DataService = new DataService('system.type=testimonial');

    constructor(props: any) {
        super(props)

        this.state = {
            testimonials: [],
        }
    }


    componentDidMount() {
        this.dataSvc.query()
            .then(res => {
                this.setState({ testimonials: res.items });
            })
    } 

    render() {
        const settings2 = {
            adaptiveHeight: true,
            autoplay: true,
            autoplaySpeed: 5000,
            dots: true,
            infinite: true,
            pauseOnHover: false,
            slidesToScroll: 1,
            slidesToShow: 1,
            speed: 2000,
            swipeToSlide: true,
        };

        const style = {
            background: `url(${bg})no-repeat center center fixed`
        }

        return (
            <div className="feedback" style={style}>

                <div className="header-section">
                    <span className="title-section">FEEDBACK</span> <br />
                    <span className="title-section-sub">What our Customers say</span>
                </div>

                <Slider {...settings2}>
                    {
                        this.state.testimonials.map((element, i) => 
                        <div key={i} className="feed-item">
                        <span className="feed-txt" >
                                <i className="fas fa-quote-left" />
                                <span dangerouslySetInnerHTML={{ __html: element.elements.feedback.value }}/>
                                <i className="fas fa-quote-right" />
                        </span>
                            <p className="feed-autor">{element.elements.name.value}, {element.elements.title.value} at {element.elements.company.value}</p>
                    </div>
                    )
                    }

                </Slider>
            </div>
        )
    }
}

export default Feedbacks
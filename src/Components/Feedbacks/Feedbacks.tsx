import * as React from "react";
import './feedbacks.css';
import Slider from "react-slick";

import bg from '../../img/moon.jpg';


class Feedbacks extends React.Component {

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

        const feddbacks = [
            {
                autor: 'Ramon Lapenta, Senior Front End Developer at Cyber-Duck Ltd',
                coment: 'Bits Orchestra team was very helpful, they had a good understanding of the brief and deep knowledge of the system. They were always keen to provide advice and recommendations that benefit the project substantially.'
            },
            {
                autor: 'Jon Hollis, Head of Web Development at confidential',
                coment: 'Roman and team have taken over an existing Kentico EMS site for a large US Oil Company. So far, they have handled every single request that we have thrown at them and these were diverse, challenging, often bespoke, usually urgent and almost daily, over the last 11 months. Their work is of an extremely high quality, they are capable, quick and we have great confidence in the support that we are getting.'
            },
            {
                autor: 'Sylvain Audet, CEO at MyDevPartner.com',
                coment: 'We hired Roman for a Kentico analysis project and have been very satisfied. He is very skilled and professional. We are looking to hire him and his team again on future projects.'
            },
            {
                autor: 'Alan Lehmann, President at In energy sector',
                coment: 'Bits Orchestra team are outstanding developers​. They listen carefully to our business needs and easily turns our business objectives into a well thought out and executed development effort. Roman is very bright and definitely the most capable developer that has worked on our site. He is not only a Kentico expert but has successfully tackled other complicated development assignments demonstrating expertise in both front and backend development. Roman takes initiative to suggest enhancements that make site maintenance easier while improving the customer experience. The team is very responsive to our work requests and has great follow up. They have also worked very business partners and this has reflected positively on our company. Roman is a true partner for us and a tremendous asset to our organization. We will continue to work with them and would highly recommend Roman and his team for your development needs. He and his team will exceed your expectations!.'
            },
            {
                autor: 'Shena Lowe, Managing Partner at Consensus Interactive',
                coment: 'The Bits Orchestra team does excellent work. They are always available and I appreciate our frequent calls and screen-shares together. Their dedication to the projects and knowledge of Kentico is outstanding. They truly care about the quality of their work, and became a part of our team easily!'
            }
        ]

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
                    {feddbacks.map((item, index) => {
                        return <div key={index} className="feed-item">
                            <span className="feed-txt">
                                <p>
                                    <i className="fas fa-quote-left" />
                                    {item.coment}
                                    <i className="fas fa-quote-right" />
                                </p>
                                <p className="feed-autor">{item.autor}</p>
                            </span>
                        </div>
                    })}

                </Slider>
            </div>
        )
    }
}

export default Feedbacks
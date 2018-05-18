import * as React from "react";
import './about.css';
import $ from 'jquery';



class About extends React.Component {
    firstAnimate: boolean;
    onScroll = () => {

        if (window.scrollY > 2600) {
            $('.skillbar').each(function (this: any) {
                $(this).find('.skillbar-bar').animate({
                    width: $(this).attr('data-percent')
                }, 3000);
            });
            $('.accordion').animate(
                {
                    left: '0px',
                    opacity: '1'
                },
                {
                    duration: 1500,
                    specialEasing: {
                        left: 'swing',
                        opacity: 'swing'
                    }
                }
            );
            $('.skills').fadeIn(2000)
            this.forceUpdate();
        }
    }

    componentWillMount() {
        window.addEventListener('scroll', this.onScroll, false);
    }

    render() {


        const style = {
            css1: {
                background: '#3c3c3c'
            },
            css2: {
                background: '#757575'
            },
            // html1: {
            //     background: '#d35400'
            // },
            // html2: {
            //     background: '#e67e22'
            // },
            // jq1: {
            //     background: '#2c3e50'
            // },
            // jq2: {
            //     background: '#2c3e50'
            // },
            // php1: {
            //     background: '#46465e'
            // },
            // php2: {
            //     background: '#5a68a5'
            // },
        };


        return (
            <div className="about">
                <div className="header-section">
                    <span className="title-section">About us</span> <br />
                    <span className="title-section-sub">We offer great services</span>
                </div>
                <div className="container">
                    <div className="row ">

                        <div className="col-md-6">
                        <p>Our Team</p>
                            <div className="accordion" id="accordion">
                                <div className="card">
                                    <div className="card-header" id="headingOne">
                                        <h5 className="mb-0">
                                            <button className="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                WHO WE ARE?
                                            </button>
                                        </h5>
                                    </div>

                                    <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
                                        <div className="card-body">
                                            Our team of experienced web developers, those have great Kentico CMS development background and achievements in this area. Our team is extremely collaborative and friendly, creative and full of new ideas, with a huge willingness to help you to improve your business and ready for challenges.
                                            Our goal is to provide you with high quality software, which follows and even is ahead of the latest trends in world web, as your success is our success. We want to bring value to your company and your business and build our relations on trust and respect.
                                       </div>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="card-header" id="headingTwo">
                                        <h5 className="mb-0">
                                            <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                                WHAT WE DO?
                                            </button>
                                        </h5>
                                    </div>
                                    <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
                                        <div className="card-body">
                                            We are the team of the Kentico CMS experts, with a great skill set of CMS features and capabilities, knowing the approaches and understanding their philosophy. Team has started its Kentico path since earlier versions of CMS and grew up their knowledges along with Kentico CMS grows. This results in high quality of the product delivered by the team in a short terms, great performance, secure application and personalized back end for every user or role, wide range of other useful configuration like workflows, web analytics, content staging, web farms, etc. We are aware of strong and week sides of Kentico CMS, so we will provide you with the best configuration for your particular case, meanwhile, ensuring flexibility and extensibility of the application.
                                         </div>
                                    </div>
                                </div>

                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className="skills">
    <p>Our skills</p>
                                <div className="skillbar clearfix " data-percent="50%">
                                    <div className="skillbar-title" style={style.css1}><span>CSS3</span></div>
                                    <div className="skillbar-bar" style={style.css2} />
                                    <div className="skill-bar-percent">50%</div>
                                </div>

                                <div className="skillbar clearfix " data-percent="80%">
                                    <div className="skillbar-title" style={style.css1}><span>HTML5</span></div>
                                    <div className="skillbar-bar" style={style.css2} />
                                    <div className="skill-bar-percent">80%</div>
                                </div>


                                <div className="skillbar clearfix " data-percent="50%">
                                    <div className="skillbar-title" style={style.css1}><span>jQuery</span></div>
                                    <div className="skillbar-bar" style={style.css2} />
                                    <div className="skill-bar-percent">50%</div>
                                </div>

                                <div className="skillbar clearfix " data-percent="40%">
                                    <div className="skillbar-title" style={style.css1}><span>PHP</span></div>
                                    <div className="skillbar-bar" style={style.css2} />
                                    <div className="skill-bar-percent">40%</div>
                                </div>

                                <div className="skillbar clearfix " data-percent="40%">
                                    <div className="skillbar-title" style={style.css1}><span>PHP</span></div>
                                    <div className="skillbar-bar" style={style.css2} />
                                    <div className="skill-bar-percent">40%</div>
                                </div>

                                <div className="skillbar clearfix " data-percent="80%">
                                    <div className="skillbar-title" style={style.css1}><span>HTML5</span></div>
                                    <div className="skillbar-bar" style={style.css2} />
                                    <div className="skill-bar-percent">80%</div>
                                </div>

                            </div>

                        </div>

                    </div>
                </div>

            </div>
        )
    }
}

export default About
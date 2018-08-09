import * as React from "react";
import './about.css';
import $ from 'jquery';
import DataService from "../../common/services/DataService";

interface IState {
    dataSkills: any[],
    articles: any[],
}

class About extends React.Component<any, IState> {

    private skillSvc: DataService = new DataService('system.type=skill');
    private articleSvc: DataService = new DataService('system.type=article');

    constructor(props: any) {
        super(props)

        this.state = {
            articles: [],
            dataSkills: [],
        }
    }


    componentWillMount() {
        window.addEventListener('scroll', this.onScroll, false);

        this.skillSvc.query()
            .then(res => {
                this.setState({ dataSkills: res.items });
            })
        this.articleSvc.query()
            .then(res => {
                this.setState({ articles: res.items });
            })
    }

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


    render() {

        const style = {
            css1: {
                background: '#3c3c3c'
            },
            css2: {
                background: '#757575'
            },
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
                                {
                                    this.state.articles.map((element, i) =>
                                        i > 0 ?
                                            <div key={i} className="card">
                                                <div className="card-header" id="headingOne">
                                                    <h5 className="mb-0">
                                                        <button className="btn btn-link" type="button" data-toggle="collapse" data-target={`#${i}`} aria-expanded="true" aria-controls={"collapseOne"}>
                                                            {element.elements.title.value}
                                                        </button>
                                                    </h5>
                                                </div>

                                                <div id={`${i}`} className={`collapse ${i === 1 ? 'show' : ''}`} aria-labelledby="headingOne" data-parent="#accordion">
                                                    <div className="" dangerouslySetInnerHTML={{ __html: element.elements.text.value }} />

                                                </div>
                                            </div>
                                            : null
                                    )
                                }

                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className="skills">
                                <p>Our skills</p>
                                {
                                    this.state.dataSkills.map((element, i) =>
                                        <div key={i} className="skillbar clearfix " data-percent={`${element.elements.value.value}%`}>
                                            <div className="skillbar-title" style={style.css1}><div>{element.elements.title.value}</div></div>
                                            <div className="skillbar-bar" style={style.css2} />
                                            <div className="skill-bar-percent">{element.elements.value.value}%</div>
                                        </div>
                                    )
                                }
                            </div>

                        </div>

                    </div>
                </div>

            </div>
        )
    }
}

export default About
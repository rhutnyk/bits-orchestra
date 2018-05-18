import * as React from "react";
import './cms.css';

class Cms extends React.Component {
    showCms: boolean;

    onScroll = () => {
        this.showCms = (window.scrollY > 1250);
        this.forceUpdate();
    }

    componentWillMount() {
        window.addEventListener('scroll', this.onScroll, false);
    }

    render() {

        return (
            <div className="cms">

                <div className="header-section">
                    <span className="title-section">Looking for cms?</span> <br />
                    <span className="title-section-sub">Evaluate Kentico</span>
                </div>

                <div className="container">
                    <div className="row cms-colom">

                        <div className="col-md-6">
                            <div className={`cms-item ${this.showCms ? 'showCms-item' : ''}`}>
                                <i className="fas fa-star" />
                                <div className={`cms-item-text ${this.showCms ? 'showCms-txt' : ''}`}>
                                    <h4>Popular</h4>
                                    <h6>Above 25,000 web sites</h6>
                                </div>
                            </div>
                            <div className={`cms-item ${this.showCms ? 'showCms-item' : ''}`}>
                                <i className="far fa-building" />
                                <div className={`cms-item-text ${this.showCms ? 'showCms-txt' : ''}`}>
                                    <h4>Well Known</h4>
                                    <h6>McDonald’s, Brussels Airlines, Vodafone, Audi, Mazda, Subaru, Samsung, Gibson, ESPN, Guinness and others use Kentico CMS</h6>
                                </div>
                            </div>
                            <div className={`cms-item ${this.showCms ? 'showCms-item' : ''}`}>
                                <i className="fas fa-sitemap" />
                                <div className={`cms-item-text ${this.showCms ? 'showCms-txt' : ''}`}>
                                    <h4>Extendable</h4>
                                    <h6>Web farm support</h6>
                                </div>
                            </div>
                            <div className={`cms-item ${this.showCms ? 'showCms-item' : ''}`}>
                                <i className="fas fa-cogs" />
                                <div className={`cms-item-text ${this.showCms ? 'showCms-txt' : ''}`}>
                                    <h4>Reliable</h4>
                                    <h6>7 days issue fixing policy, 24/7 support</h6>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className={`cms-item ${this.showCms ? 'showCms-item' : ''}`}>
                                <i className="fas fa-globe" />
                                <div className={`cms-item-text ${this.showCms ? 'showCms-txt' : ''}`}>
                                    <h4>World Wide</h4>
                                    <h6>Used in 100 countries</h6>
                                </div>
                            </div>
                            <div className={`cms-item ${this.showCms ? 'showCms-item' : ''}`}>
                                <i className="fas fa-bullseye" />
                                <div className={`cms-item-text ${this.showCms ? 'showCms-txt' : ''}`}>
                                    <h4>Solid Solution</h4>
                                    <h6>70 modules, 450 configurable web parts will cover most of your needs</h6>
                                </div>
                            </div>
                            <div className={`cms-item ${this.showCms ? 'showCms-item' : ''}`}>
                                <i className="fas fa-magic" />
                                <div className={`cms-item-text ${this.showCms ? 'showCms-txt' : ''}`}>
                                    <h4>Customizible</h4>
                                    <h6>Source code availability along with different approaches for customization</h6>
                                </div>
                            </div>
                            <div className={`cms-item ${this.showCms ? 'showCms-item' : ''}`}>
                                <i className="fas fa-hands-helping" />
                                <div className={`cms-item-text ${this.showCms ? 'showCms-txt' : ''}`}>
                                    <h4>User Friendly</h4>
                                    <h6>Easy-to-use and obvious editing interface in a administration as well as on site</h6>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        )
    }
}


export default Cms
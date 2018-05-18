import * as React from "react";
import './blogs.css';

import cloud from '../../img/cms/blog1.jpg';
import cloud2 from '../../img/cms/blog2.png';
import cloud3 from '../../img/cms/blog3.jpg';

class Blogs extends React.Component {

    render() {

        return (
            <div className="blogs">
                <div className="header-section">
                    <span className="title-section">OUR BLOG POSTS</span> <br />
                    <span className="title-section-sub">See all posts in our blog</span>
                </div>

                <div className="container">
                    <div className="row ">
                        <div className="col-md-12">

                            <div className="wrap">
                                <div className="tile">
                                    <img src={cloud} />
                                    <div className="text1">
                                        <h1>Kentico Cloud: client side solution</h1>
                                        <p className="animate-text txt-date">MAY 03</p>
                                        <p className="animate-text">Last year’s we can see a huge shift towards client side solution in the world of web. Development of JavaScript frameworks like Angular JS, React JS allows us to build... </p>
                                        <button className="btn-read animate-text">Read more ...</button>
                                    </div>
                                </div>

                                <div className="tile">
                                    <img src={cloud2} />
                                    <div className="text1">
                                        <h1>Kentico ListInfo Object Types</h1>
                                        <p className="animate-text txt-date">MAR 15</p>
                                        <p className="animate-text">ListInfo object types in Kentico - what is it, how and where it can be used.</p>
                                        <button className="btn-read animate-text">Read more ...</button>
                                    </div>
                                </div>

                                <div className="tile">
                                    <img src={cloud3} />
                                    <div className="text1">
                                        <h1>Cloud Data Source</h1>
                                        <p className="animate-text txt-date">FEB 20</p>
                                        <p className="animate-text">Recently Kentico presented cloud solution for content management, which works great for client side and MVC applications. But what about old and nice Portal Engine...</p>
                                        <button className="btn-read animate-text">Read more ...</button>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>

            </div >
        )
    }





}

export default Blogs
import * as React from "react";
import './gallery.css';

import work1 from '../../img/work1.png';


class Gallery extends React.Component {

    render() {

        return (
            <div className="gallery">
                <div className="header-section">
                    <span className="title-section">Portfolio</span> <br />
                    <span className="title-section-sub">See our work</span>
                </div>

                <figure className="snip1543">
                    <img src={work1} alt="sample108" />
                    <figcaption>
                        <h3>Inverness McKenzie</h3>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi tenetur accusamus dicta? Quidem voluptates nemo, molestiae nam asperiores quasi, enim nobis quo explicabo sed, amet sint cum deserunt corporis. Cumque modi temporibus corrupti non quaerat, saepe accusamus debitis est odit dolorem! Ab repellendus quaerat optio a odio libero suscipit aperiam laborum hic molestias natus magni pariatur non, tempora quam alias quidem quibusdam at consequatur velit corporis facilis. Quos, odio reprehenderit reiciendis, at illo excepturi sunt perferendis temporibus a iusto consectetur.</p>
                    </figcaption>
                    <a href="#" />
                </figure>

                <figure className="snip1543">
                    <img src={work1} alt="sample108" />
                    <figcaption>
                        <h3>Inverness McKenzie</h3>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi tenetur accusamus dicta? Quidem voluptates nemo, molestiae nam asperiores quasi, enim nobis quo explicabo sed, amet sint cum deserunt corporis. Cumque modi temporibus corrupti non quaerat, saepe accusamus debitis est odit dolorem! Ab repellendus quaerat optio a odio libero suscipit aperiam laborum hic molestias natus magni pariatur non, tempora quam alias quidem quibusdam at consequatur velit corporis facilis. Quos, odio reprehenderit reiciendis, at illo excepturi sunt perferendis temporibus a iusto consectetur.</p>
                    </figcaption>
                    <a href="#" />
                </figure>

                <figure className="snip1543">
                    <img src={work1} alt="sample108" />
                    <figcaption>
                        <h3>Inverness McKenzie</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium nam optio et voluptates voluptate. Corrupti necessitatibus excepturi quibusdam? Id quos dolor nostrum ea illo libero, maxime nobis rem dolores at aliquid unde doloremque accusantium quibusdam aliquam natus. Facere, ex illo. Error quasi tenetur perspiciatis reprehenderit nam facere, exercitationem accusantium? Accusamus recusandae odio fugit iusto nostrum dignissimos, aperiam temporibus placeat numquam sequi, quis dolore neque aliquid deleniti. Cupiditate, quam dolorem sapiente facilis assumenda odio numquam quidem ab velit possimus debitis voluptatum! Nemo praesentium alias dicta, aperiam voluptatibus quas facere perspiciatis quod?</p>
                    </figcaption>
                    <a href="#" />
                </figure>

                <figure className="snip1543">
                    <img src={work1} alt="sample108" />
                    <figcaption>
                        <h3>Inverness McKenzie</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium nam optio et voluptates voluptate. Corrupti necessitatibus excepturi quibusdam? Id quos dolor nostrum ea illo libero, maxime nobis rem dolores at aliquid unde doloremque accusantium quibusdam aliquam natus. Facere, ex illo. Error quasi tenetur perspiciatis reprehenderit nam facere, exercitationem accusantium? Accusamus recusandae odio fugit iusto nostrum dignissimos, aperiam temporibus placeat numquam sequi, quis dolore neque aliquid deleniti. Cupiditate, quam dolorem sapiente facilis assumenda odio numquam quidem ab velit possimus debitis voluptatum! Nemo praesentium alias dicta, aperiam voluptatibus quas facere perspiciatis quod?</p>
                    </figcaption>
                    <a href="#" />
                </figure>

                <div className="container">
                    <div className="row ">

                        <div className="col-md-6">
                            sdss
                        </div>
                        <div className="col-md-12">
                            <div className="box-slider">
                                <ul className="m">
                                    <li className="m1 li" tabIndex={1}><img src="//unsplash.it/500/500?random=1" alt="" /></li>
                                    <li className="m2 li" tabIndex={2}><img src="//unsplash.it/500/500?random=2" alt="" /></li>
                                    <li className="m3 li" tabIndex={3}><img src="//unsplash.it/500/500?random=3" alt="" /></li>
                                    <li className="m4 li" tabIndex={4}><img src="//unsplash.it/500/500?random=4" alt="" /></li>
                                    <li className="m5 li" tabIndex={5}><img src="//unsplash.it/500/500?random=5" alt="" /></li>
                                    <li className="m6 li" tabIndex={6}><img src="//unsplash.it/500/500?random=6" alt="" /></li>
                                    <li className="cube-wrap">
                                        <div className="cube">
                                            <div className="front"><img src="//unsplash.it/500/500?random=1" alt="" /></div>
                                            <div className="right"><img src="//unsplash.it/500/500?random=2" alt="" /></div>
                                            <div className="top"><img src="//unsplash.it/500/500?random=3" alt="" /></div>
                                            <div className="left"><img src="//unsplash.it/500/500?random=4" alt="" /></div>
                                            <div className="bottom"><img src="//unsplash.it/500/500?random=5" alt="" /></div>
                                            <div className="back"><img src="//unsplash.it/500/500?random=6" alt="" /></div>
                                        </div>
                                    </li>
                                </ul>

                            </div>
                        </div>
                    </div>
                </div>








            </div>
        )
    }

}

export default Gallery

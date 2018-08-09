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

            </div>
        )
    }

}

export default Gallery

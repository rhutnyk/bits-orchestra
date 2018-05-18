import * as React from "react";
import './footer.css';

import kentico1 from '../../img/kentico1.png';
import kentico2 from '../../img/kentico2.png';
import brand from '../../img/b-o.png';



class Footer extends React.Component {

    render() {
        return (
            <footer >
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <img className="f-foto1" src={kentico1} alt="" />
                            <img className="f-foto2" src={kentico2} alt="" />

                        </div>
                        <div className="col-md-6">
                            <div className="f-contact">



                                <p><i className="fas fa-mobile-alt" /> +380 97 649 6077</p>
                                <p><i className="fas fa-home" /> Sheptytskogo, 12 St.</p>
                                <p>Zymna Voda, Lviv</p>
                                <p>Ukraine 81110</p>
                            </div>
                        </div>
                        <div className="f-copy-r">
                            <p>Copyright © 2018 Bits Orchestra / All rights reserved</p>
                        </div>
                        <div className="social">
                            <div className="fb-share-button"
                                data-href="http://bitsorchestra.com"
                                data-layout="button"
                                data-size="small"
                                data-mobile-iframe="true">
                                <a target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=http%3A%2F%2Fbitsorchestra.com%2F&amp;src=sdkpreparse"
                                    className="fb-xfbml-parse-ignore">Share</a>
                            </ div>

                            <div className="twet">
                                <a href="https://twitter.com/share?ref_src=twsrc%5Etfw" className="twitter-share-button"
                                    data-show-count="false">Tweet</a>
                            </div>
                        </div>

                    </div>
                </div>
                <img className="f-brand" src={brand} alt="" />
            </footer>
        )
    }

}

export default Footer

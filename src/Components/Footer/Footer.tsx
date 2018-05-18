import * as React from "react";
import './footer.css';

import kentico1 from '../../img/kentico1.png';
import kentico2 from '../../img/kentico2.png';


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
                                <p><i className="fas fa-mobile-alt"/> +380 97 649 6077</p>
                                <p><i className="fas fa-home"/> Sheptytskogo, 12 St.</p>
                                <p>Zymna Voda, Lviv</p>
                                <p>Ukraine 81110</p>
                            </div>
                        </div>
                        <div className="f-copy-r">
                            <p>Copyright © 2018 Bits Orchestra / All rights reserved</p>
                        </div>
                    </div>
                </div>
            </footer>
        )
    }

}

export default Footer

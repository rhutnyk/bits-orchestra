import * as React from "react";
import './quote.css';

import team from '../../img/book.jpg';


class Quote extends React.Component {

    render() {

        const style = {
            background: `url(${team})no-repeat center center fixed`
        }


        return (
            <div className="team" style={style}>
                <div className="widget center">

                    <div className="blur" style={style} />

                    <div className="text center" >
                        <h1>
                            <i className="fas fa-quote-left" />
                            IF I PICK UP THE PHONE, I ACCEPT THE RESPONSIBILITY TO ENSURE THE CALLER IS SATISFIED, NO MATTER WHAT THE ISSUE IS.
                            <i className="fas fa-quote-right" />
                        </h1>
                        <p>- MICHAEL RAMUNDO </p>
                    </div>
                </div>

            </div>
        )
    }
}

export default Quote
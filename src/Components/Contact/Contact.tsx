import * as React from "react";
import './contact.css';


class Contact extends React.Component {


    render() {

        return (
            <div className="contact">
                <div className="header-section">
                    <span className="title-section">CONTACT US</span> <br />
                    <span className="title-section-sub">Submit your request or question</span>
                </div>

                <div className="container">
                    <div className="row ">
                        <div className="col-md-12">
                            <div className="row ">
                                <div className="col-md-6 form">
                                    <label>NAME</label>
                                    <input type="text"  placeholder="Enter name"/>
                                    <label>EMAIL</label>
                                    <input type="text" placeholder="Enter email" />
                                    <label>COMPANY</label>
                                    <input type="text"  placeholder="Enter company name"/>
                                </div>
                                <div className="col-md-6 form">
                                <label>MESSAGE</label>
                                    <textarea className="form-control" id="exampleFormControlTextarea1" rows={3} />
                                    <label>SECURITY CODE</label> <br/>
                                    <input className="security-input" type="text"  /> <br/>
                                    <button className="submit-btn">SUBMIT</button>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

export default Contact

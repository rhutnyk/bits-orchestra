import * as React from "react";
import './contact.css';

import ReCAPTCHA from 'react-google-recaptcha';

import bg from '../../img/social/globo2.png';


class Contact extends React.Component {
    disable: boolean;

    name: string;
    email: string;
    company: string;
    text: string;
    // recaptcha: any;


    onChangeCaptcha = (val: any) => {
        this.disable = true;
        this.forceUpdate();
    }

    sendForm = () => {
        console.log(this.name,this.email,this.company,this.text,);
        this.name = '';
        this.email = '';
        this.company = '';
        this.text = '';
        this.forceUpdate();
    }

    render() {
        const style = {
            background: `url(${bg})no-repeat center center fixed`
        }
        return (
            <div className="contact" style={style}>
                <div className="header-section">
                    <span className="title-section">CONTACT US</span> <br />
                    <span className="title-section-sub">Submit your request or question</span>
                </div>

                <div className="container">
                    <div className="row ">
                        <div className="col-md-12">
                            <div className="row form-all">
                                <div className="col-md-6 form">
                                    <label>NAME</label>
                                    <input type="text" placeholder="Enter name" onChange={(event) => { this.name = event.target.value }} />
                                    <label>EMAIL</label>
                                    <input type="text" placeholder="Enter email" onChange={(event) => { this.email = event.target.value }} />
                                    <label>COMPANY</label>
                                    <input type="text" placeholder="Enter company name" onChange={(event) => { this.company = event.target.value }} />
                                </div>
                                <div className="col-md-6 form">
                                    <label>MESSAGE</label>
                                    <textarea className="form-control" id="exampleFormControlTextarea1" rows={3} onChange={(event) => { this.text = event.target.value }}/>
                                    {/* <label>SECURITY CODE</label> <br /> */}
                                    <ReCAPTCHA
                                        // ref={(el:any) => { this.recaptcha = el; }}
                                        sitekey="6Le6WFoUAAAAAKhYKaULzFYn2hVBIXKUA44f1353"
                                        onChange={this.onChangeCaptcha}
                                    />
                                    {/* <input className="security-input" type="text" /> <br /> */}
                                    <button disabled={!this.disable} onClick={this.sendForm} className="submit-btn">SUBMIT</button>
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

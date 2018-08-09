import * as React from "react";
import './certificate.css';
import DataService from "../../common/services/DataService";

interface IState {
    certifacates: any[],
}

export default class Certificate extends React.Component<any, IState> {

    private dataSvc: DataService = new DataService('system.type=certificate');

    constructor(props: any) {
        super(props)

        this.state = {
            certifacates: [],
           
        }
    }

    componentWillMount() {
        
        this.dataSvc.query()
        .then(res => {
            this.setState({ certifacates: res.items });
        })
    }
    

    render() {
        

        return (
            <div className="cms">

                <div className="header-section">
                    <span className="title-section">Certificate</span> <br />
                    <span className="title-section-sub">Our achievements</span>
                </div>

                <div className="container">
                    <div className="row cms-colom">
                    {
                        this.state.certifacates.length>0?
                        <embed src={`${this.state.certifacates[0].elements.file.value[0].url}`}/>
                        : null
                    }
                    </div>
                </div>

            </div>
        )
    }
}


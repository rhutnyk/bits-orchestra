import * as React from "react";
import './cms.css';
import DataService from "../../common/services/DataService";

interface IState {
    dataCms: any[],
    showCms: boolean;
}

class Cms extends React.Component<any, IState> {

    private dataSvc: DataService = new DataService('system.type=cms');

    constructor(props: any) {
        super(props)

        this.state = {
            dataCms: [],
            showCms: false,
        }
    }

    componentWillMount() {
        window.addEventListener('scroll', this.onScroll, false);
        
        this.dataSvc.query()
        .then(res => {
            this.setState({ dataCms: res.items });
        })
    }
    
    onScroll = () => {
        this.setState({ showCms: (window.scrollY > 1250) })
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
                        {
                            this.state.dataCms.map((element, i) =>
                                <div key={i} className="col-md-6">
                                    <div className={`cms-item ${this.state.showCms ? 'showCms-item' : ''}`}>
                                        <i className={`${element.elements.icon_class.value}`} />
                                        <div className={`cms-item-text ${this.state.showCms ? 'showCms-txt' : ''}`}>
                                            <h4>{element.system.name}</h4>
                                            <h6 dangerouslySetInnerHTML={{ __html: element.elements.description.value }} />
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                    </div>
                </div>

            </div>
        )
    }
}


export default Cms
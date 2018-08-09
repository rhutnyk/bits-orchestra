import * as React from "react";
import './blog-details.css';
import { NavLink } from 'react-router-dom';
import DataService from "../../common/services/DataService";



interface IState {
    blogs: any[];
}



export default class BlogList extends React.Component<any, IState> {

    private dataSvc: DataService = new DataService('system.type=blogpost&order=elements.date[desc]');

    constructor(props: any) {
        super(props)

        this.state = {
            blogs: [],
        }
    }

    componentDidMount() {
        this.dataSvc.query()
            .then(res => {
                console.log(res.items[0]);
                this.setState({ blogs: res.items });
            })
    }


    render() {

        return (
            <div className="container">
                <div className="blog-page">
                    <h3 className="blog-header">Blog Posts</h3>
                    {
                        this.state.blogs.map((element, i) =>
                            <div key={i} className="item-blog">
                                <div className="icon">
                                    <img src={`${element.elements.image.value[0].url}`} />
                                </div>
                                <div className="item-content">
                                    <div className="time">
                                        {element.system.name}
                                    </div>
                                    <div className="item-title">
                                        <NavLink to={`/blogs/${element.system.id}`}>
                                            {element.elements.title.value}
                                        </NavLink>
                                    </div>
                                    <div className="item-text" dangerouslySetInnerHTML={{ __html: element.elements.summary.value }} />
                                </div>
                            </div>
                        )
                    }
                    <NavLink className="btn-back" to={`/`}>
                        HOME
                   </NavLink>
                </div >
            </div >
        )
    }


}


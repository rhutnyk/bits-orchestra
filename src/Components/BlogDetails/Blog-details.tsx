import * as React from "react";
import './blog-details.css';
import { NavLink } from 'react-router-dom';
import DataService from "../../common/services/DataService";



interface IState {
    id: string;
    blog: any;
}

interface IProps {
    match: any,
}

export default class BlogDetails extends React.Component<IProps, IState> {

    private dataSvc: DataService = new DataService('system.type=blogpost');

    constructor(props: IProps) {
        super(props)

        this.state = {
            blog: {},
            id: props.match.params.id,
        }
    }

    componentDidMount() {
        if (this.props.match.params.id) {
            this.dataSvc.select(this.props.match.params.id)
                .then(res => this.setState({ blog: res.items[0] }))
        }
    }


    render() {

        return (
            <div className="container">
                <div className="blog-page">
                    {
                        this.state.blog && this.state.blog.elements ?
                            <span>
                                <h3 className="blog-header">{this.state.blog.elements.title.value}</h3>
                                <div className="date">{this.state.blog.system.name}
                                    <span>  by  </span> <a>Roman Hutnyk</a>
                                </div>
                                <div className="blog-summary" dangerouslySetInnerHTML={{ __html: this.state.blog.elements.summary.value }} />
                                <div className="blog-body" dangerouslySetInnerHTML={{ __html: this.state.blog.elements.body.value }} />
                            </span>
                            : null
                    }
                    <NavLink className="btn-back" to={`/blogs`}>
                        Back to all blogs
                   </NavLink>

                </div >
            </div >
        )
    }


}


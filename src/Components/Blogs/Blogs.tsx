import * as React from "react";
import './blogs.css';
import { NavLink } from 'react-router-dom';
import DataService from "../../common/services/DataService";


interface IState {
    blogPosts: any[],
}


class Blogs extends React.Component<any, IState> {

    private dataSvc: DataService = new DataService('system.type=blogpost&order=elements.date[desc]&limit=3');

    constructor(props: any) {
        super(props)

        this.state = {
            blogPosts: [],
        }
    }


    componentDidMount() {
        this.dataSvc.query()
            .then(res => {
                this.setState({ blogPosts: res.items });
            })
    }


    render() {

        return (
            <span>
                <div className="blogs">
                    <div className="header-section">
                        <span className="title-section">OUR BLOG POSTS</span> <br />
                        <span className="title-section-sub with-navlink">
                            <NavLink to={`/blogs`}>
                                See all posts in our blog
                            </NavLink>
                        </span>
                    </div>

                    <div className="container">
                        <div className="row ">
                            <div className="col-md-12">
                                <div className="wrap">
                                    {
                                        this.state.blogPosts.map((element, i) =>
                                            <div key={i} className="title">
                                                <img src={element.elements.image.value[0].url} alt="" />
                                                <div className="text1" >
                                                    <h1>{element.elements.title.value}</h1>
                                                    <p className="animate-text txt-date">{element.system.name}</p>
                                                    <p className="animate-text" dangerouslySetInnerHTML={{ __html: element.elements.summary.value }} />

                                                    <NavLink className="btn-read" to={`/blogs/${element.system.id}`}>
                                                        Read more ...
                                                     </NavLink>
                                                </div>
                                            </div>
                                        )
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div >
            </span>
        )
    }





}

export default Blogs
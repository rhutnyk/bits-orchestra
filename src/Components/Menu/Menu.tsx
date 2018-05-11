import * as React from "react";
import { NavLink } from 'react-router-dom';
import './Menu.css';




class Menu extends React.Component<any> {


    render() {
        return (

            <div>

                <ul className="list-menu">
                    <li><NavLink exact={true} activeClassName='is-active' to="/">Home</NavLink></li>
                    <li><NavLink activeClassName='is-active' to="/addTestimonial">Add testimonials</NavLink></li>
                    <li><NavLink activeClassName='is-active' to="/data">Fire base</NavLink></li>
                    <li><NavLink activeClassName='is-active' to="/axios">Axios data</NavLink></li>
                    <li><NavLink activeClassName='is-active' to="/gallery">Gallery</NavLink></li>
                </ul>
             
            </div>
        )
    }

}

export default Menu
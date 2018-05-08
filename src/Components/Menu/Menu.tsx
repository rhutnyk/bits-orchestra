import * as React from "react";
import { NavLink } from 'react-router-dom';
import './Menu.css';


let clickBtn: boolean = true;

class Menu extends React.Component<any> {
    
    addClass(event: any): any {
        clickBtn = !clickBtn;
        this.forceUpdate();
        
    }
    render() {
        return (
            
            <div>
                {
                clickBtn? 
                <ul className="list-menu">
                    <li>
                        <NavLink exact={true} activeClassName='is-active' to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink activeClassName='is-active' to="/addTestimonial">Add testimonials</NavLink>
                    </li>
                    <li>
                        <NavLink activeClassName='is-active' to="/data">Fire base</NavLink>
                    </li>
                    <li>
                        <NavLink activeClassName='is-active' to="/b">News</NavLink>
                    </li>
                    <li>
                        <NavLink activeClassName='is-active' to="/c">Contact</NavLink>
                    </li>
                </ul>
                :
                ''
                }
               

                <div id="burger-container" className={clickBtn? 'open': ''} onClick={() => {this.addClass(event)}}>
                    <div id="burger">
                        <span> &nbsp;</span>
                        <span> &nbsp;</span>
                        <span> &nbsp;</span>
                        <span> &nbsp;</span>
                    </div>
                </div>
            </div>
        )
    }

}

export default Menu
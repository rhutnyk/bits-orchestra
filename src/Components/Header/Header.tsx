import * as React from "react";
import './header.css';
import $ from 'jquery';


class Header extends React.Component {
    moment: number;
    scrolling: boolean;

    componentWillMount() {
        window.addEventListener('scroll', this.onScroll, false);
    }

    onScroll = () => {
        this.scrolling = (window.scrollY > this.moment)
        this.moment = window.scrollY;

        const scrollPos = $(document).scrollTop();

        $('.menu a').each(function (this: any) {
            const currLink = $(this);
            const refElement = $(currLink.attr("href"));
            if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
                $('#menu ul li a').removeClass("active");
                currLink.addClass("active");
            }
            else {
                currLink.removeClass("active");
            }
        });
        this.forceUpdate();
    }

    render() {
        return (
            <header className={this.scrolling ? 'header-up' : 'header-down'}>
                <div className="logo">
                    <img src='http://bitsorchestra.com/getmedia/080290ee-ffc4-4f1a-aeb7-f001bd9b57da/176-l.jpg' alt="" />
                </div>

                <div className="menu" >
                    <ul>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#services">Services</a></li>
                        <li><a href="#cms">CMS</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#blogs">Blogs</a></li>
                        <li><a href="#feedbacks">Feedbacks</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </div>

            </header>
        )
    }
}

export default Header
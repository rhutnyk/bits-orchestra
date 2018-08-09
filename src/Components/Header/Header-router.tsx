import * as React from "react";
import './header.css';
import $ from 'jquery';
import DataService from "../../common/services/DataService";

interface IState {
    clickBtn: boolean,
    scrolling: boolean,
    logoImg: any[];
}

export default class HeaderRouter extends React.Component<any, IState> {
    moment: number;

    private dataSvc: DataService = new DataService('system.type=logo');

    constructor(props: any) {
        super(props)

        this.state = {
            clickBtn: true,
            logoImg: [],
            scrolling: false,
        }
    }


    componentWillMount() {
        window.addEventListener('scroll', this.onScroll, false);
        if (document.documentElement.clientWidth < 850) {
            this.addClass();
        }
        this.dataSvc.query()
        .then(res => {
            this.setState({ logoImg: res.items });
        })
    }

    addClass(): void {
        this.setState((prevState: any) => {
            prevState.clickBtn = !prevState.clickBtn;
            return {clickBtn: prevState.clickBtn}
        })
    }

    onScroll = () => {
        this.setState({scrolling: (window.scrollY > this.moment)})
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
    }

    render() {
        return (
            <header className={this.state.scrolling ? 'header-up' : 'header-down'}>
                <div className="logo">
                {
                    this.state.logoImg.length>0?
                    <img src={`${this.state.logoImg[0].elements.image.value[0].url}`} />
                    : null
                }
                </div>

                <div className="menu" >
                {
                this.state.clickBtn ?
                    <ul  className="list-menu">
                        <li><a href="#home">Home</a></li>
                        <li><a href="#services">Services</a></li>
                        <li><a href="#cms">CMS</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#blogs">Blogs</a></li>
                        <li><a href="#feedbacks">Feedbacks</a></li>
                        <li><a href="#certificate">Certificate</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                :
                ''
                }
                 </div>
                  <div id="burger-container" className={this.state.clickBtn ? 'open' : ''} onClick={() => { this.addClass() }}>
                    <div id="burger">
                        <span> &nbsp;</span>
                        <span> &nbsp;</span>
                        <span> &nbsp;</span>
                        <span> &nbsp;</span>
                    </div>
                </div>
               

            </header>
        )
    }
}


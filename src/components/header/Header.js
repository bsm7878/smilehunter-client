import React, { Component } from 'react';
import logo_before from './images/logo_before.png';
import logo_after from './images/logo_after.png';
import './header.scss'
import Category from '../category/Category';
import {Link} from 'react-router-dom';

class Header extends Component {
    state = {
        height: 0
    }

    componentDidMount() {
        window.addEventListener('scroll', this.checkHeight);
    }

    checkHeight = () => {
        this.setState({
            height: window.pageYOffset
        })
    }


    render() {
        const {height} = this.state;
        const {checkHeight} = this;
        return (
            <div className = {height > 0 ? 'nav nav_scroll' : `nav`} onScroll = {checkHeight} >
                <div className ="nav_inner">
                    {height > 0 ?
                        <Link to = "/"><img src = {logo_after} className = "logo" alt = "웃음사냥꾼" /></Link>
                        :
                        <Link to = "/"><img src = {logo_before} className = "logo" alt = "웃음사냥꾼" /></Link>
                    }

                    <Category fontColor = {height > 0 ? '#797979' : `white`}  />
                </div>
            </div>
        );
    }
}

export default Header;
import React, { Component } from 'react';
import logo_before from './images/logo_before.png';
import './header.scss'

class Header extends Component {
    render() {
        return (
            <div className = "nav">
                <div className ="nav_inner">
                    <img src = {logo_before} className = "logo_before" alt = "웃음사냥꾼" />
                </div>
            </div>
        );
    }
}

export default Header;
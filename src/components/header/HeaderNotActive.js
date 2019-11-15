import React, { Component } from 'react';
import logo_after from './images/logo_after.png';
import './header.scss'
import Category from '../category/Category';
import {Link} from 'react-router-dom';
class HeaderNotActive extends Component {
    render() {
        return (
            <div>
                <div className = "nav nav_scroll">
                <div className ="nav_inner">
                        <Link to = "/"><img src = {logo_after} className = "logo" alt = "웃음사냥꾼" /></Link>                    
                    <Category fontColor = "#797979"  />
                </div>
            </div>
            </div>
        );
    }
}

export default HeaderNotActive;
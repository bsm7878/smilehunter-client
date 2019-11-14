import React, { Component } from 'react';
import './category.scss'
import {Link} from 'react-router-dom';

class Category extends Component {
    render() {
        const {fontColor} = this.props;
        const categoryStyle = {
            color: fontColor
        }
        return (
            <div className = "category" >
                <ul>
                    <li><Link to = "/intro" style = {categoryStyle}>소개</Link></li>
                    <li><Link to = "/tv" style = {categoryStyle}>예능</Link></li>
                    <li><Link to = "/" style = {categoryStyle}>웹콘텐츠</Link></li>
                    <li><Link to = "/" style = {categoryStyle}>클라우드</Link></li>
                    <li><Link to = "/" style = {categoryStyle}>회원가입</Link></li>
                </ul>
            </div>
        );
    }
}

export default Category;
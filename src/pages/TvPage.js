import React, { Component } from 'react';
import ContentList from '../components/content/ContentList';
import SearchList from '../components/search/SearchList';
import HeaderNotActive from '../components/header/HeaderNotActive';

class TvPage extends Component {
    render() {
        const indexStyle = {
            backgroundColor: "#f2f3f5"
        }
        const heightStyle = {
            paddingTop: "120px"
        }
        return (
            <div style = {indexStyle}>
                <HeaderNotActive/>
                <div style = {heightStyle}></div>
                <SearchList/>
                <ContentList/>
            </div>
        );
    }
}

export default TvPage;
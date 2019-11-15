import React, { Component } from 'react';
import Header from '../components/header/Header';
import Main from '../components/main/Main';
import ContentList from '../components/content/ContentList';
import BestTitle from '../components/best/BestTitle';

class IndexPage extends Component {
    render() {
        const indexStyle = {
            backgroundColor: "#f2f3f5"
        }
        return (
            <div style = {indexStyle}>
                <Header/>
                <Main/>
                <BestTitle/>
                <ContentList />
            </div>
        );
    }
}

export default IndexPage;
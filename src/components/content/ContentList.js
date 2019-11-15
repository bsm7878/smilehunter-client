import React, { Component } from 'react';
import './contentlist.scss';
import ContentItem from './ContentItem';

class ContentList extends Component {
    render() {
        return (
            <div className = "contentlist">
                <ContentItem/>
                <ContentItem/>
                <ContentItem/>
            </div>
        );
    }
}

export default ContentList;
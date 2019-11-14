import React, { Component } from 'react';
import './contentlist.scss';
import ContentItem from './ContentItem';

class ContentList extends Component {
    render() {
        return (
            <div className = "contentlist">
                <h3 className = "en_font list_name">Best 10</h3>
                <p className = "list_sub_name">11월 3주차, 인기 예능 콘텐츠</p>
                {this.props.children}    
                <ContentItem/>
                <ContentItem/>
            </div>
        );
    }
}

export default ContentList;
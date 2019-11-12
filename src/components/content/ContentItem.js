import React, { Component } from 'react';
import './contentitem.scss';

class ContentItem extends Component {
    render() {
        return (
            <div className = "box">
                <div className = "box_header">
                    <img src="http://placehold.it/48x48" className = "maker_img" alt = "제작사 이미지"/>
                    <div className = "maker_content">
                        <span className = "maker_name">무한도전</span>
                        <span className = "maker_channel">Naver Tv</span>
                    </div>
                </div>
                <div className = "clear_both"></div>
                <div className = "box_video">
                <iframe width="100%" height="100%" title = "title" src="https://www.youtube.com/embed/3cbRRHkSEvM" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                <div className = "box_content"></div>
            </div>
        );
    }
}

export default ContentItem;
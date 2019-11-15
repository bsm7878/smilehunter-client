import React, { Component } from 'react';
import "./BestTitle.scss";

class BestTitle extends Component {
    render() {
        return (
            <div className = "BestTitle">
                <h3 className = "en_font list_name">Best 10</h3>
                <p className = "list_sub_name">11월 3주차, 인기 예능 콘텐츠</p>
            </div>
        );
    }
}

export default BestTitle;
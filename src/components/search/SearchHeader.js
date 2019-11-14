import React, { Component } from 'react';
import "./SearchHeader.scss";

class SearchHeader extends Component {
    render() {
        return (
            <div className = "SearchHeader">
                <h3>
                    <span>'전체 예능 인기'</span> 검색결과
                </h3>
            </div>
        );
    }
}

export default SearchHeader;
import React, { Component } from 'react';
import "./SearchBar.scss";
class SearchBar extends Component {
    render() {
        return (
            <div className = "SearchBar">
                <ul>
                    <li><span className = "Circle"></span>인기</li>
                    <li><span className = "Circle"></span>무작위</li>
                    <li><span className = "Circle"></span>최신</li>
                </ul>
            </div>
        );
    }
}

export default SearchBar;
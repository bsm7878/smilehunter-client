import React, { Component } from 'react';
import SearchHeader from './SearchHeader';
import SearchBar from './SearchBar';
import "./SearchList.scss"

class SearchList extends Component {
    render() {
        return (
            <div className = "search_list">
                <SearchHeader/>
                <SearchBar/>
            </div>
        );
    }
}

export default SearchList;
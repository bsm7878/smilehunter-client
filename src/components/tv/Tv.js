import React, { Component } from 'react';
import SearchList from '../search/SearchList';
import ContentList from '../content/ContentList';
import "./Tv.scss";

class Tv extends Component {
    render() {
        return (
            <div className ="tv">
                <ContentList>
                    <SearchList/>
                </ContentList>
            </div>
        );
    }
}

export default Tv;
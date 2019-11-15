import React, { Component } from 'react';
import Intro from '../components/intro/Intro';
import HeaderNotActive from '../components/header/HeaderNotActive';

class IntroPage extends Component {
    render() {
        return (
            <div>
                <HeaderNotActive/>
                <Intro/>
            </div>
        );
    }
}

export default IntroPage;
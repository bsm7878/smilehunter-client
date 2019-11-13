import React, { Component } from 'react';
import logo_before from './images/logo_before.png';
// import logo_after from './images/logo_after.png';
import './header.scss'

class Header extends Component {
    state = {
        height: 0
    }
    myRef = React.createRef()

    checkHeight = () => {
        this.setState({
            height: window.pageYOffset
        });
    }

    componentDidMount() {
        window.addEventListener('scroll', this.onScroll);
    }

    onScroll = () => {
        // const scrollTop = this.myRef.current.scrollTop
        this.setState({
            // height: this.state.height + 10
            height: window.pageYOffset
        })
      }


    render() {
        return (
            <div ref={this.myRef} className = "nav nav_scroll" onScroll = {this.onScroll}  >
                <div className ="nav_inner">
                    <img src = {logo_before} className = "logo_before" alt = "웃음사냥꾼" />
                    {this.state.height}
                </div>
            </div>
        );
    }
}

export default Header;
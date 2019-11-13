import React, { Component} from 'react';
import './button_square.scss';


class ButtonSquare extends Component {
    render() {
        const {buttonName,fontColor, backgroundColor, children} = this.props;
        const buttonStyle = {
            color: fontColor,
            backgroundColor: backgroundColor
        }
        return (
            <div className = "button_square" style = {buttonStyle}>
                {children} {buttonName}
            </div>
        );
    }
}

export default ButtonSquare;
import React, { Component } from 'react';
import './main.scss';
import { TiInputChecked }  from "react-icons/ti";
import Button from '../button/Button';
import mobile_img from './images/mobile_img.png';

class Main extends Component {
    render() {
        return (
            <div className = "main">
                <div className = "main_inner">
                    <div className = "main_inner_left">
                        <p>예능 알짜배기 보고싶을 때</p>
                        <p>국내 최초, 예능 링크 공유 플랫폼</p>
                        <ul>
                            <li><TiInputChecked className ="check" /> 무작정 웃고 싶을 때</li>
                            <li><TiInputChecked className ="check" /> 재미있는 예능만 보고 싶을 때</li>
                            <li><TiInputChecked className ="check" /> 지하철, 버스, 독서실에서 심심할 때</li>
                            <li><TiInputChecked className ="check" /> 저작권 걱정 없이 고화질로 보고 싶을 때</li>
                        </ul>

                        <Button/>
                    </div>
                    <div className = "main_inner_right">
                        <img src = {mobile_img} className = "mobile_img" alt = "핸드폰에 예능 영상 있는 이미지" />
                    </div>
                </div>
            </div>
        );
    }
}

export default Main;
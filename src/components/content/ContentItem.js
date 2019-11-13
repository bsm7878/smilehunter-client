import React, { Component } from 'react';
import './contentitem.scss';
import { MdBookmarkBorder } from "react-icons/md";
import ButtonSquare from '../button_square/ButtonSquare';
import { TiHeartOutline } from "react-icons/ti";
import { FaRegCommentDots } from "react-icons/fa";


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
                <div className = "box_content">
                    <h3 class = "content_name">박명수, 북아메리카 오행시</h3>
                    <p class = "content_share_time">
                        Shared at <span className = "year_month_day">2018-01-20</span> <span className = "pm_am">PM</span> <span className = "hour">11</span>:<span className = "min">13</span>
                    </p>
                    <MdBookmarkBorder className = "content_bookmark"/>
                    <ul class = "content_tag">
                        <li>무한도전</li>
                        <li>정형돈</li>
                        <li>가요제</li>
                        <li>노래</li>
                        <div class= "clear_both"></div>
                    </ul>
                    <hr/>
                    <p class = "content_explanation">
                        중국에서 인기 있는 조세호
                        <br/>
                        중국 이름 차오슈하오
                        <br/>
                        그를 본 점원들의 반응 ㅋㅋ 뭐야 그게 ㅋㅋ
                        <br/>
                        "당신이, 차오슈하오~?"
                    </p>
                    <ButtonSquare className = "button_square" backgroundColor = "white" fontColor = "black" buttonName = "재밌어요">
                        <TiHeartOutline/>
                    </ButtonSquare>
                    <ButtonSquare className = "button_square" backgroundColor = "#628AFC" fontColor = "white" buttonName = "댓글보기">
                        <FaRegCommentDots/>
                    </ButtonSquare>
                    <div class = "clear_both"></div>
                    <p className = "copyright">
                        © 해당 영상의 저작권은 <span>'해피 투게더 3'</span>에 있음을 알려드립니다.
                    </p>
                </div>
                <div class = "claer_both"></div>
            </div>
        );
    }
}

export default ContentItem;
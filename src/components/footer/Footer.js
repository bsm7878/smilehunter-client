import React, { Component } from 'react';
import './footer.scss';

class Footer extends Component {
    render() {
        return (
            <div className = "footer">
                <p>본 콘텐츠의 저작권은 저작권자에 있으며, 본 사이트는 해당 콘텐츠의 영상 링크 주소를 공유해 주는 사이트에 불과합니다.</p>
                <p>Copyright © <span>Octopus.</span> All Rights Reserved.</p>
            </div>
        );
    }
}

export default Footer;
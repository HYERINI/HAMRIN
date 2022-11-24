import './MenuBar.css';
import React from 'react';
import board from '../../img/게시판.png';
import apply from '../../img/신청.png';
import traffic from '../../img/교통.png';
import mypage from '../../img/마이페이지.png';

const MenuBar = () => {
  return (
    <div className="Menu-wrap">
        <div className="menu-item">
            <img src={board}/>
            <p>게시판</p>
        </div>
        <div className="menu-item">
            <img src={apply}/>
            <p>서비스 신청</p>
        </div>
        <div className="menu-item">
            <img src={traffic}/>
            <p>교통</p>
        </div>
        <div className="menu-item">
            <img src={mypage}/>
            <p>마이페이지</p>
        </div>

    </div>
  )
}

export default MenuBar
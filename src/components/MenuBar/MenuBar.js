import './MenuBar.css';
import { useNavigate } from 'react-router-dom';
import React from 'react';
import board from '../../img/게시판.png';
import apply from '../../img/신청.png';
import traffic from '../../img/교통.png';
import mypage from '../../img/마이페이지.png';

const MenuBar = () => {
    const navigate = useNavigate();

    const onMoveMypage = (e) => {
        navigate('/mypage');
    }

    const onMoveBoard = (e) => {
        navigate('/board_list');
    }

    const onMoveService = (e) => {
        navigate('/apply_service');
    }
    
    const onMoveNotice = (e) => {
        navigate('/notice_board');
    }

    return (
        <div className="menu-wrap">
            <div className="menu-item">
                <img src={board} onClick={onMoveBoard}/>
                <p>게시판</p>
            </div>
            <div className="menu-item">
                <img src={apply} onClick={onMoveService}/>
                <p>서비스 신청</p>
            </div>
            <div className="menu-item">
                <img src={traffic} onClick={onMoveNotice}/>
                <p>공지사항</p>
            </div>
            <div className="menu-item">
                <img src={mypage} onClick={onMoveMypage}/>
                <p onClick={onMoveMypage}>마이페이지</p>
            </div>

        </div>
    )
}

export default MenuBar
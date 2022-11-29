import './MyPage.css';
import Title from './../Title/Title';
import MenuBar from './../MenuBar/MenuBar';
import Profile from './../Profile/Profile';
import profile from '../../img/profile_ex.png';
// import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const MyPage = () => {

  const navigate = useNavigate();
  // const [users, setUsers] = useState([]);

  const onMoveAsk = (e) => {
    navigate('/ask');
  } 

  const onMoveLookList = (e) => {
    navigate('/my_post_list');
  }

  const role = 'USER';
  const onMoveEditInfo = (e) => {
    if(role == 'USER'){
      navigate('/editGeneral');
    }else if(role == 'OPERATION'){
      navigate('/editAdmin');
    }else{
      alert('정보를 수정할 수 없는 사용자입니다.');
    }
  }

  const token = localStorage.getItem('token');
  window.onload = axios({
    method: "get",
    url: "http://54.180.210.232/api/v1/my",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + localStorage.getItem('token')
    },
  }).then((res) => {
    var role = res.data.result.role;
    var name = res.data.result.name;
    //response안의 회원정보 중 role을 저장한다.
  }).catch((error) => {
    alert(token);
      alert("어쩌지이... ? 안 뜨는데에..");
  });

  
  return (
    <div>
      <Title title="마이 페이지" />
      <div className="profile-wrap">
        <div className="profile-info">
          <img src={profile} />
          <Profile title="name"/>
        </div>
        <div className="underBar"></div>
        <div className="profile-service">
          <h4>서비스 신청 설정</h4>
          <p onClick={onMoveLookList}>신청 내역 보기</p>
          <div className="profile-alarmWrap">
            <p>서비스 매칭 알림</p>
            <label class="switch">
              <input type="checkbox" />
              <span class="slider round"></span>
            </label>
          </div>
        </div>
        <div className="underBar"></div>
        <div className="profile-user">
          <h4>사용자 설정</h4>
          <p onClick={onMoveEditInfo}>정보 수정</p>
        </div>
        <div className="underBar"></div>
        <div className="profile-andSoOn">
          <h4>기타</h4>
          <p onClick={onMoveAsk}>문의하기</p>
          <p>탈퇴하기</p>
        </div>
      </div>
      <MenuBar />
    </div>
  )
}

export default MyPage
import React from 'react';
import './MyPage.css';
import Title from './../Title/Title';
import MenuBar from './../MenuBar/MenuBar';
import Profile from './../Profile/Profile';
import profile from '../../img/profile_ex.png';


const MyPage = () => {

  return (
    <div>
      <Title title="마이 페이지" />
      <div className="profile-wrap">
        <div className="profile-info">
          <img src={profile} />
          <p>박현빈</p>
          {/* <Profile /> */}
        </div>
        <div className="underBar"></div>
        <div className="profile-service">
          <h4>서비스 신청 설정</h4>
          <p>신청 내역 보기</p>
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
          <p>정보 수정</p>
        </div>
        <div className="underBar"></div>
        <div className="profile-andSoOn">
          <h4>기타</h4>
          <p>문의하기</p>
          <p>탈퇴하기</p>
        </div>
      </div>
      <MenuBar />
    </div>
  )
}

export default MyPage
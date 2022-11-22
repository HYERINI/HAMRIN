import React from 'react';
import { useNavigate } from 'react-router-dom';
import './SelectType.css';
import Title from './../Title/Title';
import generalMember from './../../img/person.png';
import operateMember from './../../img/operator.png';

function SelectType(){
  const navigate = useNavigate();
 
  const onMoveGeneral = (event) => {
    navigate('/generalSignup');
  }

  const onMoveAdmin = (event) => {
    navigate('/adminSignup');
  }

  return (
    <div className="SelectType">
      <Title title="SIGN UP" />
      <div className="SelectWrap">
        <div className="SelectTitle">
            <h2>사용자 유형 선택</h2>
        </div>
        <div className="SelectBtn">
            <div className="generalBtn" onClick={onMoveGeneral}>
              <img src={generalMember} />
              <p>일반 회원</p>
            </div>
            <div className="operateBtn" onClick={onMoveAdmin}>
              <img src={operateMember} />
              <p>운영팀 회원</p>
            </div>
        </div>
      </div>
    </div>
  );
}

export default SelectType;

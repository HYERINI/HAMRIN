import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Title from './../Title/Title';

function EditAdminInfo(){
    const role = "OPERATION";
    const navigate = useNavigate();
    const [userData, setUserData] = useState({});
    const [name, setName] = useState("");
    const [address, setAddress] = useState("");
    const [userName, setUserName] = useState("");
    const [businessName, setBusinessName] = useState("");
    const [businessRegisterNumber, setBusinessRegisterNumber] = useState("");
    const [businessType, setBusinessType] = useState("");
    const nameInput = useRef();
    useEffect(() => {
        axios({
            method: "get",
            url: "http://54.180.210.232/api/v1/my",
            headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer " + localStorage.getItem('token')
            },
            }).then((res) => {
                setUserData(res.data.result);
                alert(res.data.result);

            }).catch((error) => {
                alert("어쩌지이... ? 안 뜨는데에..");
        });
    },[])

    const onSubmitEdit = (e) => {
        axios({
            method: "put",
            url: "http://54.180.210.232/api/v1/signout",
            headers: {
              "Content-Type": "application/json",
              Authorization: "Bearer " + localStorage.getItem('token')
              },
              data: {
                  "address": {
                    "details": String(address),
                  },
                  "name": String(name),
                  "role": String(role),
                  "username": String(userName),  
                  "businessName": String(businessName),
                  "businessRegisterNumber": String(businessRegisterNumber),
                  "businessType": String(businessType)
              },
              }).then((res) => {
                  alert('수정이 완료되었습니다.');
                  navigate('/mypage');
              }).catch((error) => {
                  alert("어쩌지이... ? 안 뜨는데에..");
              });
    }
    const onNameHandler = (event) => {
        setName(event.currentTarget.value);
    }

    const onUserNameHandler = (event) => {
        setUserName(event.currentTarget.value);
    }

    const onAddressHandler = (event) => {
        setAddress(event.currentTarget.value);
    }

    const onBusinessNameHandler = (event) => {
        setBusinessName(event.currentTarget.value);
    }

    const onBusinessRegisterNumberHandler = (event) => {
        setBusinessRegisterNumber(event.currentTarget.value);
    }

    const onBusinessTypeHandler = (event) => {
        setBusinessType(event.currentTarget.value);
    }

    const onSubmitHandler = (event) => {
        
        // 버튼만 누르면 리로드 되는것을 막아줌
        event.preventDefault();
        
        //axios로 회원정보 get
    }
    return (
        <form className="SignUpForm">
            <Title title="정보수정하기" />
            <div className="inputForm">
                <div id="name">
                    <label for="name">이름</label>
                    <input type="text" value={userData.name} ref={nameInput} placeholder="실명을 입력하세요." onChange={onNameHandler} required></input>
                </div> 
                <div id="username">
                    <label for="email">이메일</label>
                    <input type="email" name="userName" value={userData.username} placeholder="abcdefg@gmail.com" onChange={onUserNameHandler}></input>
                </div> 
                <div id="password">
                    <label for="password">비밀번호</label>
                    <button type="button" id="editPw">비밀번호 변경하기</button>
                </div>
                <div id="address">
                    <label for="address">주소</label>
                    <input type="text" name="address" value={userData.address} placeholder="주소를 입력하세요." onChange={onAddressHandler}></input>
                </div>
                <div id="businessName">
                    <label for="businessName">상호명</label>
                    <input type="text" value={userData.businessName} name="businessName" placeholder="상호명을 입력하세요." onChange={onBusinessNameHandler}></input>
                </div>
                <div id="businessRegisterNumber">
                    <label for="businessRegisterNumber">사업자등록번호</label>
                    <input type="text" value={userData.businessRegisterNumber} name="businessRegisterNumber" placeholder="사업자등록번호를 입력하세요." onChange={onBusinessRegisterNumberHandler}></input>
                </div>
                <div id="businessType">
                    <label for="businessType">사업자 종류</label>
                    <input type="text" value={userData.businessType} name="businessType" placeholder="사업자종류는 드롭다운으로 해야되는거 아님 ?"></input>
                </div>
                <div className="signupBt">
                    <button id="signupBt" type="button" onClick={onSubmitEdit}>수정하기</button>
                </div>
            </div>
        </form>
    );
}

export default EditAdminInfo
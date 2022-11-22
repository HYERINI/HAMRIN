import './Signup.css';
import React, { useState } from 'react';
import axios from 'axios';

function GeneralSignup(){
    const [name, setName] = useState("");
    const [address, setAddress] = useState("");
    // const [role, setRole] = useState("");
    const [password, setPassword] = useState("");
    const [userName, setUserName] = useState("");
    const [businessName, setBusinessName] = useState("");
    const [businessRegisterNumber, setBusinessRegisterNumber] = useState("");
    const [businessType, setBusinessType] = useState("");

    const onNameHandler = (event) => {
        setName(event.currentTarget.value);
    }

    const onPasswordHandler = (event) => {
        setPassword(event.currentTarget.value);
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
        const role = "OPERATION"; 
        console.log('유저이름', name);
        console.log('이메일', userName);
        console.log('비밀번호', password);
        console.log('주소', address);
        console.log('역할', role);
        console.log('사업자이름', businessName);
        console.log('사업자등록번호', businessRegisterNumber);
        console.log('사업자종류', businessType);
        
        axios({
            method: "post",
            url: "http://54.180.210.232/api/v1/signup",
            headers: {
                "Content-Type": `application/json`,
            },
            data: {
                "address": {
                  "details": address,
                },
                "name": name,
                "password": password,
                "role": role,
                "username": userName,  
                "businessName": businessName,
                "businessRegisterNumber": businessRegisterNumber,
                "businessType": businessType
            },
        })
        .then((res) => {
            console.log(res);
        })
        .catch((error) => {
            console.log(error);
        });
    }
    return (
        <div className="generalUserForm">
            <div id="name">
                이름
                <input type="text" name="name" value={name} onChange={onNameHandler} required></input>
            </div>
            <div id="username">
                이메일
                <input type="email" name="userName" value={userName} onChange={onUserNameHandler}></input>
            </div>
            <div id="password">
                비밀번호
                <input type="password" name="password" value={password} onChange={onPasswordHandler}></input>
            </div>
            <div id="address">
                주소
                <input type="text" name="address" value={address} onChange={onAddressHandler}></input>
            </div>
            <div id="businessName">
                상호명
                <input type="text" value={businessName} name="businessName" onChange={onBusinessNameHandler}></input>
            </div>
            <div id="businessRegisterNumber">
                사업자등록번호
                <input type="text" value={businessRegisterNumber} name="businessRegisterNumber" onChange={onBusinessRegisterNumberHandler}></input>
            </div>
            <div id="businessType">
                사업자 종류
                <input type="text" value={businessType} name="businessType" onChange={onBusinessTypeHandler}></input>
            </div>
            <div id="signupBt">
                <button type="button" onClick={onSubmitHandler}>회원가입하기</button>
            </div>
        </div>
    );
}

export default GeneralSignup;
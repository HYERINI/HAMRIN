import './Signup.css';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
  
function GeneralSignup(){

    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [gender, setGender] = useState("");
    const [userName, setUserName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [major, setMajor] = useState("");
    const [university, setUniversity] = useState("");
    const [foreignerNumber, setForeignerNumber] = useState("");
    const [address, setAddress] = useState("");

    const onNameHandler = (event) => {
        setName(event.currentTarget.value);
    }

    const onPasswordHandler = (event) => {
        setPassword(event.currentTarget.value);
    }

    const onGenderHandler = (event) => {
        setGender(event.currentTarget.value);
    }

    const onUserNameHandler = (event) => {
        setUserName(event.currentTarget.value);
    }

    const onPhoneNumberHandler = (event) => {
        setPhoneNumber(event.currentTarget.value);
    }

    const onMajorHandler = (event) => {
        setMajor(event.currentTarget.value);
    }

    const onUniversityHandler = (event) => {
        setUniversity(event.currentTarget.value);
    }

    const onForeignerNumberHandler = (event) => {
        setForeignerNumber(event.currentTarget.value);
    }

    const onAddressHandler = (event) => {
        setAddress(event.currentTarget.value);
    }

    const onSubmitHandler = (event) => {
        // 버튼만 누르면 리로드 되는것을 막아줌
        event.preventDefault();
        const role = "USER";

        console.log('역할', role);
        console.log('유저이름', name);
        console.log('이메일', userName);
        console.log('비밀번호', password);
        console.log('성별', gender);
        console.log('전화번호', phoneNumber);
        console.log('전공', major);
        console.log('대학', university);
        console.log('외국인등록번호', foreignerNumber);
        console.log('주소', address);
        
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
                "foreignerNumber": foreignerNumber,
                "gender": gender,
                "major": major,
                "name": name,
                "password": password,
                "phoneNumber": phoneNumber,
                "role": role,
                "university": university,
                "username": userName
            },
        })
        .then((res) => {
            console.log(res);
            navigate('/login');
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
            <div id="gender">
                성별
                <select value={gender} name="gender" onChange={onGenderHandler}>
                    <option value="default">선택</option>
                    <option value="WOMAN">여자</option>
                    <option value="MAN">남자</option>
                </select>
            </div>
            <div id="phoneNumber">
                전화번호
                <input type="text" name="phoneNumber" value={phoneNumber} onChange={onPhoneNumberHandler}></input>
            </div>
            <div id="major">
                전공
                <input type="text" name="major" value={major} onChange={onMajorHandler}></input>
            </div>
            <div id="university">
                대학
                <input type="text" name="university" value={university} onChange={onUniversityHandler}></input>
            </div>
            <div id="foreignerNumber">
                외국인등록번호
                <input type="text" name="foreignerNumber" value={foreignerNumber} onChange={onForeignerNumberHandler}></input>
            </div>
            <div id="address">
                주소
                <input type="text" name="address" value={address} onChange={onAddressHandler}></input>
            </div>
            <div id="signupBt">
                <button type="button" onClick={onSubmitHandler}>회원가입하기</button>
            </div>
        </div>
    );
}

export default GeneralSignup;

import React, { useEffect, useState } from 'react';
import axios from 'axios';


const Profile = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios({
            method: "get",
            url: "http://localhost:8080/api/v1/signup",
            headers: {
                "Content-Type": `application/json`,
            }
        })
        .then((res) => {
            console.log(res);
        })
        .catch((error) => {
            alert('정보를 가져오지 못해요 ㅜ');
        });
    })

  return (
    <div>{users}</div>
  )
}

export default Profile;
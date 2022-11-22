import React from 'react';
import './Title.css';
import back from './../../img/back.png';

function Title(props){
  return (
    <div className="Title">
        <img src={back} />
        <h2>{props.title}</h2>
    </div>
  );
}

export default Title;

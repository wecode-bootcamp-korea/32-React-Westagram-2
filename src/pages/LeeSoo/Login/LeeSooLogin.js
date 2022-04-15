/*eslint-disable*/

import React from 'react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './LeeSooLogin.scss';

const LeeSooLogin = props => {
  let [LoginId, LoginIdChange] = useState('');
  let [LoginPw, LoginPwChange] = useState('');

  const navigate = useNavigate();
  const goMain = () => {
    navigate('/LeeSoo-Main');
  };

  return (
    <div className="box">
      <header className="logo">
        <p>Westagram</p>
      </header>
      <div className="insert-area">
        <form action="">
          <input
            type="text"
            placeholder="전화번호,사용자 이름 또는 이메일"
            onChange={e => {
              LoginIdChange(e.target.value);
            }}
          />
          <br />
          {LoginId}
          <br />
          <br />
          <input
            type="password"
            placeholder="비밀번호"
            onChange={e => {
              LoginPwChange(e.target.value);
            }}
          />
          <br />
          {LoginPw}
          <br />
          <br />
          <button type="submit" onClick={goMain}>
            로그인
          </button>
          <br />
        </form>
      </div>
      <div className="bottom">
        <a href="#" className="passwordFind">
          <b>비밀번호를 잊으셨나요?</b>
        </a>
      </div>
    </div>
  );
};

export default LeeSooLogin;

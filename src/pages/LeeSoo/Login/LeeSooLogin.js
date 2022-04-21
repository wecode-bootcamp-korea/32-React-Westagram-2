/*eslint-disable*/
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LeeSooLogin.scss';

const LeeSooLogin = props => {
  // state 선언
  const [LoginId, LoginIdChange] = useState('');
  const [LoginPw, LoginPwChange] = useState('');

  //  변수 선언
  const isValid = (LoginId.includes('@') && LoginPw.length >= 5) === true;
  const navigate = useNavigate();

  const goMain = e => {
    navigate('/LeeSoo-Main');
  };

  // const goMain = e => {
  // e.preventDefault();

  //   fetch('http://10.58.0.177:8000/users/signin', {
  //     method: 'POST',
  //     body: JSON.stringify({
  //       email: LoginId,
  //       password: LoginPw,
  //       name: '영빈오빠',
  //       phone_number: '010-1234-5678',
  //     }),
  //   })
  //     .then(response => response.json())
  //     .then(result => {
  //       console.log('결과: ', result);
  //       navigate('/LeeSoo-Main');
  //     });
  // };

  return (
    <div className="loginWrapper">
      <header className="logo">
        <p>Westagram</p>
      </header>
      <div className="insertArea">
        <form action="">
          <input
            type="text"
            placeholder="전화번호,사용자 이름 또는 이메일"
            onChange={e => {
              LoginIdChange(e.target.value);
            }}
          />
          <br />

          <input
            type="password"
            placeholder="비밀번호"
            onChange={e => {
              LoginPwChange(e.target.value);
            }}
          />

          <br />
          <button
            className={isValid ? 'button-active' : ''}
            type="submit"
            onClick={goMain}
            disabled={!isValid}
          >
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

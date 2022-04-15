import React, { useState } from 'react';
import './HyunjungLogin.scss';
import { useNavigate } from 'react-router-dom';

const HyunJungLogin = () => {
  const navigate = useNavigate();
  const [userId, setUserId] = useState('');
  const [userPw, setUserPw] = useState('');

  const handlerIdInput = event => {
    setUserId(event.target.value);
  };
  const handlerPwInput = event => {
    setUserPw(event.target.value);
  };

  const goToMain = () => {
    navigate('/hyunjung-main');
  };
  return (
    <main className="login-main">
      <article className="login-article">
        <div className="logo">
          <h1 className="login-logo">westagram</h1>
        </div>
        <form className="login-form">
          <div className="form-id">
            <input
              onChange={handlerIdInput}
              className="input-id"
              type="text"
              placeholder="전화번호, 사용자 이름 또는 이메일"
            />
          </div>
          <div className="form-pw">
            <input
              onChange={handlerPwInput}
              className="input-pw"
              type="password"
              placeholder="비밀번호"
            />
          </div>
          <div className="form-button">
            <button className="form-btn" onClick={goToMain}>
              로그인
            </button>
          </div>
          <div className="form-pw-forget">
            <a href="#" className="pw-forget">
              비밀번호를 잊으셨나요?
            </a>
          </div>
        </form>
      </article>
    </main>
  );
};

export default HyunJungLogin;

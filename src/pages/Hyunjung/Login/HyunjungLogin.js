import React, { useState } from 'react';
import './HyunjungLogin.scss';
import { useNavigate } from 'react-router-dom';

const HyunJungLogin = () => {
  const navigate = useNavigate();
  const [userId, setUserId] = useState('');
  const [userPw, setUserPw] = useState('');
  const [btnChange, setBtnChange] = useState(true);

  const handlerIdInput = event => {
    setUserId(event.target.value);
  };
  const handlerPwInput = event => {
    setUserPw(event.target.value);
  };
  const isPassLogin = event => {
    userId.includes('@') && userPw.length >= 5
      ? setBtnChange(false)
      : setBtnChange(true);
  };

  const goToMain = () => {
    navigate('/hyunjung-main');
    // 백엔드와 로그인 실습 코드
    // fetch('http://10.58.6.73:8000/users/login', {
    //   method: 'POST',
    //   body: JSON.stringify({
    //     //json 형태로 만들어주고
    //     // name: '경훈',
    //     // phone_number: '010-1234-2345',
    //     email: userId,
    //     password: userPw, // key와 state
    //   }),
    // })
    //   .then(response => response.json()) //받을때 다시 js 형식으로
    //   .then(result => console.log('결과: ', result));
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
              onKeyUp={isPassLogin}
            />
          </div>
          <div className="form-pw">
            <input
              onChange={handlerPwInput}
              className="input-pw"
              type="password"
              placeholder="비밀번호"
              onKeyUp={isPassLogin}
            />
          </div>
          <div className="form-button">
            <button
              className={!btnChange ? 'active' : 'unactive'}
              onClick={goToMain}
              disabled={btnChange}
              // type="button"
            >
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

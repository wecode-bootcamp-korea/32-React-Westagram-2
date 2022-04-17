import React from 'react';
import './LeeJiSooLogin.scss';
import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const LeeJiSooLogin = () => {
  const [userId, setId] = useState('');
  const [userPw, setPw] = useState('');
  const [disabled, setDisabled] = useState(true);
  const moveMain = useNavigate();
  const userLogin = [
    {
      id: 'id',
      type: 'text',
      placeholder: '전화번호, 사용자이름 혹은 이메일',
      value: userId,
    },
    {
      id: 'pw',
      type: 'password',
      placeholder: '비밀번호',
      value: userPw,
    },
  ];

  const handleSubmit = e => {
    if (!disabled) {
      e.preventDefault();
      moveMain('/leejisoo-main');
    }
  };

  const handleLogin = e => {
    if (e.target.id === 'id') {
      setId(e.target.value);
    } else if (e.target.id === 'pw') {
      setPw(e.target.value);
    }
    if (userId.includes('@') && userPw.length >= 5) {
      setDisabled(false);
    }
  };

  return (
    <main>
      <article>
        <div className="mainDiv">
          <div className="titleDiv">
            <h1>westagram</h1>
          </div>
          <form className="formDiv" onSubmit={handleSubmit}>
            <div className="loginDiv">
              {userLogin.map(item => (
                <input
                  onChange={handleLogin}
                  id={item.id}
                  type={item.type}
                  placeholder={item.placeholder}
                  value={item.value}
                />
              ))}
              <button type={'submit'} disabled={disabled}>
                로그인
              </button>
            </div>
          </form>
          <div class="forgot">
            <a>비밀번호를 잊으셨나요?</a>
          </div>
        </div>
        <div class="join">
          <div>
            <p>계정이 없으신가요?</p>
            <Link to={'/'}>가입하기</Link>
          </div>
        </div>
      </article>
    </main>
  );
};

export default LeeJiSooLogin;

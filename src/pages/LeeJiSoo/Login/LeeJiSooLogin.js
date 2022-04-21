import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './LeeJiSooLogin.scss';

const LeeJiSooLogin = () => {
  const [userId, setId] = useState('');
  const [userPw, setPw] = useState('');
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

  const handleLogin = e => {
    if (e.target.id === 'id') {
      setId(e.target.value);
    } else if (e.target.id === 'pw') {
      setPw(e.target.value);
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    fetch('http://10.58.7.17:8000/users/signup', {
      method: 'POST',
      body: JSON.stringify({
        email: userId,
        password: userPw,
      }),
    })
      .then(res => res.json())
      .then(result => {
        if ((result.message = 'SUCCESS')) {
          moveMain('/leejisoo-main');
          // localStorage.setItem(result.token);
        } else alert(result.message);
      });
  };

  return (
    <main className="loginMain">
      <section className="loginSection">
        <article className="mainDiv">
          <div className="titleDiv">
            <h1>westagram</h1>
          </div>
          <form className="formDiv" onSubmit={handleSubmit}>
            <div className="loginDiv">
              {userLogin.map(item => {
                const { id, type, placeholder, value } = item;
                return (
                  <input
                    key={id}
                    onChange={handleLogin}
                    id={id}
                    type={type}
                    placeholder={placeholder}
                    value={value}
                  />
                );
              })}
              <button>로그인</button>
            </div>
          </form>
          <div className="forgot">
            <a>비밀번호를 잊으셨나요?</a>
          </div>
        </article>
        <article className="join">
          <div>
            <p>계정이 없으신가요?</p>
            <Link to="/">가입하기</Link>
          </div>
        </article>
      </section>
    </main>
  );
};

export default LeeJiSooLogin;

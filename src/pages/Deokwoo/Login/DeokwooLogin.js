import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import './DeokwooLogin.scss';

const Input = ({ type, name, holder, onChange }) => {
  return (
    <input
      onChange={onChange}
      type={type}
      className={name}
      placeholder={holder}
    />
  );
};

const Button = ({ valid, name, children, dataFetch }) => {
  return (
    <button onClick={dataFetch} disabled={valid} className={name}>
      {children}
    </button>
  );
};

const DeokWooLogin = () => {
  const [inputId, setInputId] = useState('');
  const [inputPw, setInputPw] = useState('');
  const navigate = useNavigate();

  const changeValue = ({ target }) => {
    target.className === 'id'
      ? setInputId(target.value)
      : setInputPw(target.value);
  };

  let isValid = inputId.includes('@') && inputPw.length > 5;

  const goMain = e => {
    e.preventDefault();
    fetch('http://10.58.1.201:8000/users/signin', {
      method: 'POST',
      body: JSON.stringify({
        email: inputId,
        password: inputPw,
      }),
    })
      .then(response => response.json())
      .then(result =>
        result.message === 'SUCCESS'
          ? navigate('/deokwoo-main')
          : alert(result.message)
      );
  };

  return (
    <form onChange={changeValue} className="wrapper">
      <header className="logo">Westagram</header>
      <div className="login">
        <Input
          type="text"
          name="id"
          holder="전화번호, 사용자 이름 또는 이메일"
        />
        <Input type="password" name="pw" holder="비밀번호" />
      </div>
      <div className="button">
        <Button
          dataFetch={goMain}
          valid={!isValid}
          name={isValid ? 'btn active' : 'btn'}
        >
          로그인
        </Button>
      </div>
      <a className="forget">비밀번호를 잊으셨나요?</a>
    </form>
  );
};

export default DeokWooLogin;

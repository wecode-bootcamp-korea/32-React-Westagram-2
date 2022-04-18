import React, { useState } from 'react';
import './DeokwooLogin.scss';

const Input = props => {
  return (
    <input
      type={props.type}
      className={props.name}
      placeholder={props.holder}
    ></input>
  );
};

const Button = props => {
  return (
    <button disabled={props.valid} className={props.name}>
      {props.children}
    </button>
  );
};

const DeokWooLogin = () => {
  const [inputId, setInputId] = useState('');
  const [inputPw, setInputPw] = useState('');

  const changeValue = e => {
    e.target.className === 'id'
      ? setInputId(e.target.value)
      : setInputPw(e.target.value);
  };

  let isValid = inputId.includes('@') && inputPw.length > 5;

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
        <Button valid={!isValid} name={isValid ? 'btn active' : 'btn'}>
          로그인
        </Button>
      </div>
      <a className="forget">비밀번호를 잊으셨나요?</a>
    </form>
  );
};

export default DeokWooLogin;

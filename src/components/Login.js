import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Login.css';

const Login = () => {
  const navigate = useNavigate(); // useNavigate 훅 사용

  const handleLogin = () => {
    // 로그인 로직
    // \로그인 인증 API 호출\
    // 인증이 성공하면 아래 navigate를 호출

    navigate('/');
  };

  return (
    <div id="login-root" className="login-page">
      <h1 className="logo">MainYourTrip</h1>
      <div className="login-container">
        <div className="input-group">
          <label htmlFor="username">아이디</label>
          <input type="text" id="username" placeholder="아이디를 입력해주세요" />
        </div>
        <div className="input-group">
          <label htmlFor="password">비밀번호</label>
          <input type="password" id="password" placeholder="비밀번호를 입력해주세요" />
        </div>
        <button type="submit" className="login-button" onClick={handleLogin}>로그인</button>
        <div className="signup-link">
          <a href="/signup">회원가입</a>
        </div>
      </div>
    </div>
  );
};

export default Login;

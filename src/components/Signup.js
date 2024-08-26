import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Signup.css';

const Signup = () => {
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault(); // 기본 폼 제출 동작 제어
    navigate('/open-api/login'); // 로그인 페이지로 이동
  };

  return (
    <div id="signup-root" className="signup-page">
      <h1 className="logo">MapYourTrip</h1>
      <div className="signup-container">
        <div className="input-group">
          <label htmlFor="username">아이디</label>
          <input type="text" id="username" placeholder="아이디를 입력해주세요" />
        </div>
        <div className="input-group">
          <label htmlFor="nickname">닉네임</label>
          <input type="text" id="nickname" placeholder="닉네임을 입력해주세요" />
        </div>
        <div className="input-group">
          <label htmlFor="password">비밀번호</label>
          <input type="password" id="password" placeholder="비밀번호를 입력해주세요" />
        </div>
        <button type="submit" className="signup-button" onClick={handleSignup}>회원가입</button>
      </div>
    </div>
  );
};

export default Signup;

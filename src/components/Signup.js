import React from 'react';
import '../styles/Signup.css';

const Signup = () => {
  return (
    <div id="signup-root" className="signup-page">
      <h1 className="logo">MapYourTrip</h1>
      <div className="signup-container">
        <div className="input-group">
          <label htmlFor="username">아이디</label>
          <input type="text" id="username" placeholder="아이디를 입력해주세요" />
        </div>
        <div className="input-group">
          <label htmlFor="email">이메일</label>
          <input type="email" id="email" placeholder="이메일을 입력해주세요" />
        </div>
        <div className="input-group">
          <label htmlFor="password">비밀번호</label>
          <input type="password" id="password" placeholder="비밀번호를 입력해주세요" />
        </div>
        <button type="submit" className="signup-button">회원가입</button>
      </div>
    </div>
  );
};

export default Signup;

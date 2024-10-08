import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Login.css';

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [shake, setShake] = useState(false); 
  const API_URL = process.env.REACT_APP_API_URL;

  const handleLogin = async (e) => {
    e.preventDefault();

    const loginData = {
      username: username,
      password: password,
    };

    try {
      const response = await fetch(`${API_URL}/open-api/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(loginData),
      });

      if (response.ok) {
        const result = await response.json();
        sessionStorage.setItem('token', result.body.token); // JWT 토큰을 sessionStorage에 저장
        navigate('/'); // 로그인 성공 시 메인 페이지로 이동
      } else {
        const errorData = await response.json();
        setErrorMessage(errorData.message || '로그인에 실패했습니다.');
        setShake(true); 
      }
    } catch (error) {
      console.error('로그인 중 오류 발생:', error);
      setErrorMessage('서버와의 연결에 문제가 발생했습니다.');
      setShake(true); 
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleLogin(e); // Enter 키를 누르면 로그인 시도
    }
  };

  return (
    <div id="login-root" className="login-page">
      <h1 className="logo">MapYourTrip</h1>
      <form className={`login-container ${shake ? 'shake' : ''}`} onAnimationEnd={() => setShake(false)}>
        <div className="input-group">
          <label htmlFor="username">아이디</label>
          <input
            type="text"
            id="username"
            placeholder="아이디를 입력해주세요"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            autoFocus // 자동으로 포커스 설정
          />
        </div>
        <div className="input-group">
          <label htmlFor="password">비밀번호</label>
          <input
            type="password"
            id="password"
            placeholder="비밀번호를 입력해주세요"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onKeyDown={handleKeyDown} // 엔터키 핸들러 추가
          />
        </div>
        {errorMessage && <small className="error-text">{errorMessage}</small>}
        <button type="submit" className="login-button" onClick={handleLogin}>
          로그인
        </button>
        <div className="signup-link">
          <a href="/open-api/join">회원가입</a>
        </div>
      </form>
    </div>
  );
};

export default Login;

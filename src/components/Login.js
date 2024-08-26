import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Login.css';

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();

    // 로그인 요청을 위한 데이터
    const loginData = {
      username: username,
      password: password,
    };

    // 서버에 로그인 요청 (주석 처리된 부분)
    /*
    try {
      const response = await fetch('/open-api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(loginData),
      });

      if (response.ok) {
        const result = await response.json();
        navigate('/'); // 메인 페이지로 이동
      } else {
        const errorData = await response.json();
        setErrorMessage(errorData.message || '로그인에 실패했습니다.');
      }
    } catch (error) {
      console.error('로그인 중 오류 발생:', error);
      setErrorMessage('서버와의 연결에 문제가 발생했습니다.');
    }
    */

    // 서버 연결 없이, 로그인 성공으로 간주하고 메인 페이지로 이동
    if (username && password) {
      navigate('/');
    } else {
      setErrorMessage('아이디와 비밀번호를 입력해주세요.');
    }
  };

  return (
    <div id="login-root" className="login-page">
      <h1 className="logo">MainYourTrip</h1>
      <div className="login-container">
        <div className="input-group">
          <label htmlFor="username">아이디</label>
          <input
            type="text"
            id="username"
            placeholder="아이디를 입력해주세요"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
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
          />
        </div>
        {errorMessage && <small className="error-text">{errorMessage}</small>}
        <button type="submit" className="login-button" onClick={handleLogin}>
          로그인
        </button>
        <div className="signup-link">
          <a href="/open-api/join">회원가입</a>
        </div>
      </div>
    </div>
  );
};

export default Login;

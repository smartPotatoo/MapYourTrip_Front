import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Login.css';
import MapYourTripContext from '../provider/MapYourTripContext';

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [shake, setShake] = useState(false); // 애니메이션을 위한 상태
  const API_URL = process.env.REACT_APP_API_URL;
  const { handleSetToken, handleSetType } = useContext(MapYourTripContext);

  const handleLogin = async (e) => {
    e.preventDefault();

    const loginData = {
      username: username,
      password: password,
    };

    try {
      const response = await fetch(API_URL + '/open-api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(loginData),
      });

      if (response.ok) {
        const result = await response.json();
        sessionStorage.setItem('token', result.body.token);
        handleSetToken(result.body.token); // token을 context에 저장
        handleSetType('user'); // 사용자의 로그인 상태를 나타내기 위해 type을 설정
        navigate('/');
      } else {
        const errorData = await response.json();
        setErrorMessage(errorData.message || '로그인에 실패했습니다.');
        setShake(true); // 로그인 실패 시 애니메이션 시작
      }
    } catch (error) {
      console.error('로그인 중 오류 발생:', error);
      setErrorMessage('서버와의 연결에 문제가 발생했습니다.');
      setShake(true); // 로그인 실패 시 애니메이션 시작
    }
  };

  return (
    <div id="login-root" className="login-page">
      <h1 className="logo">MapYourTrip</h1>
      <div className={`login-container ${shake ? 'shake' : ''}`} onAnimationEnd={() => setShake(false)}>
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

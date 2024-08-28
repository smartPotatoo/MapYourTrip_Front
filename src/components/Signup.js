import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'; // axios를 임포트
import '../styles/Signup.css';

const Signup = () => {
  const navigate = useNavigate();

  const [username, setUsername] = useState('');
  const [usernameError, setUsernameError] = useState('');

  const [nickname, setNickname] = useState('');

  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:8081';

  const validateUsername = (value) => {
    const regex = /^[a-zA-Z0-9]+$/;
    if (!regex.test(value)) {
      setUsernameError('아이디는 영어와 숫자만 가능합니다.');
    } else {
      setUsernameError('');
    }
  };

  const validatePassword = (value) => {
    const regex = /^(?=.*[a-zA-Z])(?=.*[0-9])[^\u3131-\uD79D]+$/;
    if (value.length < 8) {
      setPasswordError('비밀번호는 8자리 이상이어야 합니다.');
    } else if (!regex.test(value)) {
      setPasswordError('비밀번호는 영어와 숫자 조합이어야 합니다.');
    } else {
      setPasswordError('');
    }
  };

  const handleSignup = async (e) => {
    e.preventDefault();

    if (!usernameError && !passwordError) {
      try {
        // 백엔드로 회원가입 데이터를 전송합니다.
        const response = await axios.post(`${API_URL}/open-api/join`, {
          username,
          nickname,
          password,
        });

        if (response.status === 200) {
          // 회원가입 성공 시 로그인 페이지로 이동
          navigate('/open-api/login');
        } else {
          console.error('회원가입 실패:', response.data);
        }
      } catch (error) {
        console.error('회원가입 중 오류 발생:', error);
      }
    }
  };

  return (
    <div id="signup-root" className="signup-page">
      <h1 className="logo">MapYourTrip</h1>
      <div className="signup-container">
        <div className="input-group">
          <label htmlFor="username">아이디</label>
          <input
            type="text"
            id="username"
            placeholder="아이디를 입력해주세요"
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
              validateUsername(e.target.value);
            }}
          />
          {usernameError && <small className="error-text">{usernameError}</small>}
        </div>
        <div className="input-group">
          <label htmlFor="nickname">닉네임</label>
          <input
            type="text"
            id="nickname"
            placeholder="닉네임을 입력해주세요"
            value={nickname}
            onChange={(e) => setNickname(e.target.value)}
          />
        </div>
        <div className="input-group">
          <label htmlFor="password">비밀번호</label>
          <input
            type="password"
            id="password"
            placeholder="비밀번호를 입력해주세요"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              validatePassword(e.target.value);
            }}
          />
          {passwordError && <small className="error-text">{passwordError}</small>}
        </div>
        <button type="submit" className="signup-button" onClick={handleSignup}>회원가입</button>
      </div>
    </div>
  );
};

export default Signup;

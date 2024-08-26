import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Signup.css'; // CSS 파일을 불러옵니다.

const Signup = () => {
  const navigate = useNavigate();

  const [username, setUsername] = useState('');
  const [usernameError, setUsernameError] = useState('');

  const [nickname, setNickname] = useState('');
  const [nicknameStatus, setNicknameStatus] = useState('');

  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');

  // 닉네임 중복 검사용 가상 API 요청 함수 (실제 API를 사용하도록 수정 예정)
  const checkNicknameAvailability = async (nickname) => {
    const takenNicknames = ['takenNickname1', 'takenNickname2']; // Mock데이터 : 이미 사용 중인 닉네임들 (삭제 예정)
    return !takenNicknames.includes(nickname);
  };

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

  const handleNicknameChange = async (value) => {
    setNickname(value);
    if (value.length > 0) {
      const isAvailable = await checkNicknameAvailability(value);
      setNicknameStatus(isAvailable ? '사용 가능한 닉네임입니다.' : '사용할 수 없는 닉네임입니다.');
    } else {
      setNicknameStatus('');
    }
  };

  const handleSignup = (e) => {
    e.preventDefault();

    if (!usernameError && !passwordError && nicknameStatus === '사용 가능한 닉네임입니다.') {
      // 회원가입 성공 시
      navigate('/open-api/login'); // 로그인 페이지로 이동
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
            onChange={(e) => handleNicknameChange(e.target.value)}
          />
          {nicknameStatus && (
            <small className={nicknameStatus === '사용 가능한 닉네임입니다.' ? 'success-text' : 'error-text'}>
              {nicknameStatus}
            </small>
          )}
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

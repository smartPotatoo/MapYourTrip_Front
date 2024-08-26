import React from 'react';
import '../styles/Login.css';

function Login() {
    return (
        <div className="login-container">
            <h1 className="logo">MainYourTrip</h1> {/* 로고를 login-box 위에 위치 */}
            <div className="login-box">
                <form>
                    <div className="input-group">
                        <label htmlFor="username">아이디</label>
                        <input type="text" id="username" placeholder="아이디를 입력해주세요" />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">비밀번호</label>
                        <input type="password" id="password" placeholder="비밀번호를 입력해주세요" />
                    </div>
                    <button type="submit" className="login-button">로그인</button>
                </form>
                <div className="signup-link">
                    <a href="/signup">회원가입</a>
                </div>
            </div>
        </div>
    );
}

export default Login;

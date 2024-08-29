import React from 'react';
import { useLocation, Routes, Route } from 'react-router-dom';
import Sidebar from './Sidebar';
import Header from './Header';
import Login from './Login';
import Signup from './Signup';
import MyPage from './MyPage';
import WrappedMap from './Map';
import ScheduleList from './ScheduleList';
import { useContext, useEffect } from 'react';
import MapYourTripContext from '../provider/MapYourTripContext';

const AppContent = () => {
  const location = useLocation();
  const {handleSetType} = useContext(MapYourTripContext);
  const isLoginPage = location.pathname === '/open-api/login';
  const isSignupPage = location.pathname === '/open-api/join';
  const isMyPage = location.pathname === '/mypage';

  useEffect(()=>{
    if(!location.pathname.includes('/schedule')){
      handleSetType('')
    }
  },[location])
  
  const isAuthPage = isLoginPage || isSignupPage; // 인증 관련 페이지인지 확인

  return (
    <div id="app-root" className={isAuthPage ? 'auth-page' : 'default-page'}>
      {!isAuthPage && <Sidebar />}
      <div className="content-wrapper">
        {!isAuthPage && <Header />}
        <div className={`content-container ${isAuthPage ? 'centered' : ''}`}>
          <Routes>
            <Route path="/open-api/login" element={<Login />} />
            <Route path="/open-api/join" element={<Signup />} />
            <Route path="/main" element={<ScheduleList />} />
            <Route path="/mypage" element={<MyPage />} />
            <Route path="/schedule/:type/:id" element={<WrappedMap/>}/> {/* type: {create: 일정 생성 페이지, modify: 일정 수정 페이지, view: 일정 조회 페이지}, id: 일정 식별키*/}
          </Routes>
          </div>
        </div>
      </div>
    );
};
  
  export default AppContent;
import React, { useEffect, useState } from 'react';
import editIcon from '../assets/icon_edit.svg';
import TravelPlansList from './TravelPlansList';
import '../styles/MyPage.css';

const MyPage = () => {
  const [profile, setProfile] = useState(null);
  const [travelPlans, setTravelPlans] = useState([]);

  useEffect(() => {
    const fetchMyPageData = async () => {
      // 서버 연결 부분
      /*
      try {
        const response = await fetch('/mypage', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
        });
        const data = await response.json();
        if (data.result.resultCode === 200) {
          setProfile(data.body[0]);
          setTravelPlans(data.body.slice(1));
        } else {
          console.error('마이페이지 데이터를 가져오는 데 실패했습니다.');
        }
      } catch (error) {
        console.error('서버와의 연결에 문제가 발생했습니다:', error);
      }
      */

      // Mock 데이터로 대체
      const mockProfile = {
        nickname: '오늘점심은두찜',
        filePath: '', // 기본적으로 파일 경로를 비워둠
      };
      
      const mockTravelPlans = [
        {
          tripName: 'Hawaii Attractions',
          startDate: '2024년 9월 3일',
          endDate: '2024년 9월 6일',
        },
        {
          tripName: 'Seoul Adventure',
          startDate: '2024년 10월 10일',
          endDate: '2024년 10월 15일',
        }
      ];

      setProfile(mockProfile);
      setTravelPlans(mockTravelPlans);
    };

    fetchMyPageData();
  }, []);

  const handleProfileImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfile((prevProfile) => ({
          ...prevProfile,
          filePath: reader.result,
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDeletePlan = (index) => {
    setTravelPlans((prevPlans) => prevPlans.filter((_, i) => i !== index));
  };

  return (
    <div className="mypage-container">
      {profile && (
        <div className="profile-section">
          <div className="profile-img-container">
            <img 
              src={profile.filePath || ''} 
              className="profile-img" 
            />
          </div>
          <div className="nickname-container">
            <h2>{profile.nickname}</h2>
            <img src={editIcon} className="edit-nickname-icon" />
          </div>
          <input
            type="file"
            accept="image/*"
            onChange={handleProfileImageChange}
            className="edit-profile-input"
          />
          <button 
            className="edit-profile-button"
            onClick={() => document.querySelector('.edit-profile-input').click()}
          >
            프로필 사진 수정
          </button>
        </div>
      )}

      <TravelPlansList
        travelPlans={travelPlans}
        onDeletePlan={handleDeletePlan}
      />
    </div>
  );
};

export default MyPage;

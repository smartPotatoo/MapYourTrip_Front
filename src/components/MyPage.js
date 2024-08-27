import React, { useEffect, useState } from 'react';
import editIcon from '../assets/icon_edit.svg'; // 수정 아이콘
import profileIcon from '../assets/icon_person.svg'; // 기본 프로필 아이콘
import '../styles/MyPage.css';

const MyPage = () => {
  const [profile, setProfile] = useState(null);
  const [travelPlans, setTravelPlans] = useState([]);

  useEffect(() => {
    // 서버로부터 마이페이지 데이터 가져오기
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

  return (
    <div className="mypage-container">
      {profile && (
        <div className="profile-section">
          <div className="profile-img-container">
            <img 
              src={profile.filePath || profileIcon} 
              className="profile-img" 
              alt="프로필 이미지" 
            />
          </div>
          <div className="nickname-container">
            <h2>{profile.nickname}</h2>
            <img src={editIcon} alt="닉네임 수정 아이콘" className="edit-nickname-icon" />
          </div>
          <input
            type="file"
            accept="image/*"
            onChange={handleProfileImageChange}
            className="edit-profile-input"
          />
          <button className="edit-profile-button">프로필 사진 수정</button>
        </div>
      )}

      <div className="travel-plans-section">
        <h3>My Travel Plans</h3>
        <div className="travel-plans-list">
          {travelPlans.map((plan, index) => (
            <div key={index} className="travel-plan-card">
              <div className="travel-plan-header">
                <h4>{plan.tripName}</h4>
                <img src={editIcon} alt="일정 수정 아이콘" className="edit-plan-icon" />
              </div>
              <p>{plan.startDate} ~ {plan.endDate}</p>
              <button className="delete-plan-button">삭제</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyPage;

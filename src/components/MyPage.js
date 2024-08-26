import React, { useEffect, useState } from 'react';
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
        filePath: '/path/to/profile/image.jpg',
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

  return (
    <div className="mypage-container">
      {profile && (
        <div className="profile-section">
          <img src={profile.filePath} alt="프로필" className="profile-img" />
          <h2>{profile.nickname}</h2>
          <button className="edit-profile-button">프로필 사진 수정</button>
        </div>
      )}

      <div className="travel-plans-section">
        <h3>My Travel Plans</h3>
        <div className="travel-plans-list">
          {travelPlans.map((plan, index) => (
            <div key={index} className="travel-plan-card">
              <h4>{plan.tripName}</h4>
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

import React, { useEffect, useState } from 'react';
import { FaSave } from 'react-icons/fa'; 
import editIcon from '../assets/icon_edit.svg';
import defaultProfileImage from '../assets/icon_person.svg';
import '../styles/MyPage.css';
import axios from 'axios';
import TravelPlansList from './TravelPlansList';

const MyPage = () => {
  const [profile, setProfile] = useState(null);
  const [travelPlans, setTravelPlans] = useState([]);
  const [isEditingNickname, setIsEditingNickname] = useState(false);
  const [newNickname, setNewNickname] = useState('');
  const [profilePicture, setProfilePicture] = useState(null);

  const getProfilePicture = () => {
    const token = sessionStorage.getItem('token');
    axios({
      url: `${process.env.REACT_APP_API_URL}/mypage/picture`,
      method: 'GET',
      responseType: 'blob',
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
      .then(res => {
        console.log(res);
        const url = URL.createObjectURL(res.data);
        setProfilePicture(url);
      })
      .catch(err => console.log(err));
  };

  useEffect(() => {
    const fetchMyPageData = async () => {
      try {
        const token = sessionStorage.getItem('token'); // JWT 토큰 가져오기
        const response = await fetch(`${process.env.REACT_APP_API_URL}/mypage`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`, // JWT 토큰을 헤더에 포함
          },
        });
    
        const data = await response.json();
        
        if (!response.ok) {
          console.error('응답 상태 코드:', response.status);
          console.error('응답 메시지:', data);
          throw new Error('서버에서 오류가 발생했습니다.');
        }
    
        if (data.result.resultCode === 200) {
          setProfile({
            nickname: data.body.nickname,
            filename: data.body.userpicture ? data.body.userpicture.originalFilename : null,
          });
          setNewNickname(data.body.nickname);
          setTravelPlans(data.body.scheduleInfoResponse);
        } else {
          console.error('마이페이지 데이터를 가져오는 데 실패했습니다.');
        }
      } catch (error) {
        console.error('서버와의 연결에 문제가 발생했습니다:', error);
      }
    };
    fetchMyPageData();
  }, []);

  useEffect(() => {
    if(profile && profile.filename){
      getProfilePicture();
    }
  }, [profile])

  const [file,setFile] = useState(null);

  const handleProfileImageChange = (event) => {
    const fileInfo = event.target.files[0];
    setFile(event.target.files[0])

    const token = sessionStorage.getItem('token');
      const formData = new FormData();
  
      // 닉네임 추가: undefined 체크
      if (newNickname !== undefined) {
        formData.append('data', new Blob([JSON.stringify({ nickname: newNickname })],{ type: 'application/json' }));
      }
      formData.append('file', fileInfo);
      
      axios.patch(
        `${process.env.REACT_APP_API_URL}/mypage`,
        formData,
        {
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'multipart/form-data',
          },
        }
      ).then((res)=>{
        console.log(res);

      // 프로필 사진이 성공적으로 업로드되면 새로운 Blob URL 생성
      const newProfileUrl = URL.createObjectURL(fileInfo);
      setProfilePicture(newProfileUrl);
      }).catch(err=>{
        console.log(err)
      });
  };

  const handleEditNickname = () => {
    setIsEditingNickname(true);
    setNewNickname(profile.nickname);
  };

  const handleSaveNickname = async () => {
    console.log("asdf")
      const token = sessionStorage.getItem('token');
      const formData = new FormData();
  
      // 닉네임 추가: undefined 체크
      if (newNickname !== undefined) {
        formData.append('data', new Blob([JSON.stringify({ nickname: newNickname })],{ type: 'application/json' }));
      }
      formData.append('file', file);
      // FormData 내용 출력
      for (let [key, value] of formData.entries()) { 
        console.log(key, value); // FormData에 들어간 각 키-값 쌍을 출력
      }
      await axios.patch(
        `${process.env.REACT_APP_API_URL}/mypage`,
        formData,
        {
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'multipart/form-data',
          },
        }
      ).then((res)=>{
        console.log(res)
      }).catch(err=>{
        console.log(err)
      });
  };


  const handleDeletePlan = (index,scheduleId) => {
    axios.delete(`${process.env.REACT_APP_API_URL}/schedule/${scheduleId}`,{
      headers:{
        Authorization: `Bearer ${sessionStorage.getItem('token') }`
      }
    }).then((res) => {
      setTravelPlans((prevPlans) => prevPlans.filter((_, i) => i !== index));
    }).catch(err => {
      console.log(err);
    });
  };

  return (
    <div className="mypage-container">
      {profile && (
        <div className="mypage-profile-section">
          <div className="mypage-profile-img-container">
            <img 
              src={profile.filename ? profilePicture : defaultProfileImage} // 프로필 사진이 없을 경우 기본 이미지 사용
              className="mypage-profile-img" 
              alt="Profile"
            />
          </div>
          <div className="mypage-nickname-container">
            {isEditingNickname ? (
              <>
                <input 
                  type="text"
                  value={newNickname}
                  onChange={(e) => setNewNickname(e.target.value)}
                  className="mypage-edit-nickname-input"
                />
                <FaSave 
                  className="mypage-save-nickname-icon"
                  onClick={handleSaveNickname}
                />
              </>
            ) : (
              <>
                <h2 className="mypage-nickname">{profile.nickname}</h2>
                <img 
                  src={editIcon} 
                  className="mypage-edit-nickname-icon" 
                  onClick={handleEditNickname}
                  alt="Edit"
                />
              </>
            )}
          </div>
          <input
            type="file"
            accept="image/*"
            onChange={handleProfileImageChange}
            className="mypage-edit-profile-input"
          />
          <button 
            className="mypage-edit-profile-button"
            onClick={() => document.querySelector('.mypage-edit-profile-input').click()}
          >
            프로필 사진 수정
          </button>
        </div>
      )}

      {/* 여행 계획 리스트 */}
      
      <TravelPlansList
        travelPlans={travelPlans}
        onDeletePlan={handleDeletePlan}
      />
     
    </div>
  );
};

export default MyPage;

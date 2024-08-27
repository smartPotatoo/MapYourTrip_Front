import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Sidebar.css';
import DetailScheduleList from'./DetailScheduleList'
import MapYourTripContext from '../provider/MapYourTripContext';
import { useEffect ,useContext} from 'react';

const Sidebar = () => {

  const {type} = useContext(MapYourTripContext);
  
  return (
    <div className="sidebar-container">
      <h2 className="logo-text">MapYourTrip</h2>
      {
        type === '' ? 
        <>
          <div><Link to="/open-api/join" className="menu-item">Sign Up</Link></div>
          <div><Link to="/open-api/login" className="menu-item">Login</Link></div>
          <div className="menu-item">Travel Plans</div>
          <div className="menu-item">Map</div>
          <div><Link to="/mypage" className="menu-item">Profile</Link></div>
        </>
        :<DetailScheduleList/>
      }
      
    </div>
  );
};

export default Sidebar;

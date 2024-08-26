import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/DetailScheduleList.css';
import ScheduleDateItem from './ScheduleDateItem'

const DetailScheduleList = () => {
  return (
    <div className="detail-schedule-list-container">

      <ScheduleDateItem index={1} item={{date:1}}/>
      <ScheduleDateItem index={1} item={{date:1}}/>
      <ScheduleDateItem index={1} item={{date:1}}/>
      <ScheduleDateItem index={1} item={{date:1}}/>
      <ScheduleDateItem index={1} item={{date:1}}/>
      <ScheduleDateItem index={1} item={{date:1}}/>
      <ScheduleDateItem index={1} item={{date:1}}/>
    </div>
  );
};

export default DetailScheduleList;
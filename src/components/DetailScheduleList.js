import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/DetailScheduleList.css';
import DetailScheduleItem from './DetailScheduleItem'

const DetailScheduleList = () => {
  return (
    <div className="detail-schedule-list-container">
      <DetailScheduleItem/>
    </div>
  );
};

export default DetailScheduleList;
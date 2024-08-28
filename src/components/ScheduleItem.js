import { useContext } from 'react';
import '../styles/ScheduleItem.css'
import MapYourTripContext from '../provider/MapYourTripContext';
import { useNavigate } from 'react-router-dom';

const ScheduleItem = ({ schedule, token }) => {
    const {handleSetScheduleId} = useContext(MapYourTripContext);
    const navigate = useNavigate();

    const handleClick = (scheduleId) => {
        handleSetScheduleId(scheduleId);
        navigate(`/schedule/view/${scheduleId}`, { state: { token } });
    }

    return (
        <div className="schedule-card" onClick={() => handleClick(schedule.id)}>
            <h3 className="schedule-title">{schedule.tripName}</h3>
            <p className="schedule-dates">여행지: {schedule.address}</p>
            <p className="schedule-dates">{schedule.startDate} ~ {schedule.endDate}</p>
            <p className="schedule-nickname">{schedule.nickname}</p>
        </div>
    );
};

export default ScheduleItem;

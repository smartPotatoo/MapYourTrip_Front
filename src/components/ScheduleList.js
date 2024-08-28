    import { useContext, useEffect, useState } from "react";
    import axios from "axios";
    import { useLocation } from "react-router-dom";
    import '../styles/ScheduleList.css'

    export default function ScheduleList() {
        const location = useLocation();
        const [schedules, setSchedules] = useState([]);
        const token = location.state?.token;
        console.log(token);

        useEffect(() => {
            const fetchSchedules = async () => {
                try {
                    const response = await axios.get(`${process.env.REACT_APP_API_URL}/open-api/`, {
                        headers: {}
                    });
                    if (response.data.result.resultCode === 200) {
                        setSchedules(response.data.body);
                    } else {
                        console.error("Failed to fetch schedules", response.data.result.resultMessage);
                    }
                } catch (error) {
                    console.error("Error fetching schedules", error);
                }
            };

            fetchSchedules();
        }, [token]);

        return (
            <div className="schedule-list">
                {schedules.map(schedule => (
                    <div key={schedule.id} className="schedule-card">
                        {console.log(schedule.tripName)}
                        <h3>{schedule.tripName}</h3>
                        <p><strong>Nickname:</strong> {schedule.nickname}</p>
                        <p><strong>Address:</strong> {schedule.address}</p>
                        <p><strong>Start Date:</strong> {schedule.startDate}</p>
                        <p><strong>End Date:</strong> {schedule.endDate}</p>
                    </div>
                ))}
            </div>
        );
    }

import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import '../styles/ScheduleList.css'
import ScheduleItem from "./ScheduleItem";
import MapYourTripContext from "../provider/MapYourTripContext";

export default function ScheduleList() {
    const location = useLocation();
    const [schedules, setSchedules] = useState([]);
    const token = location.state?.token;
    const {handleSetType} = useContext(MapYourTripContext);
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

    handleSetType('');

    return (
        <div className="schedule-list">
            {schedules.map(schedule => (
                <ScheduleItem key={schedule.id} schedule={schedule} token={token} />
            ))}
        </div>
    );
}

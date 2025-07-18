import { useEffect, useState } from "react";
import CircularProgressBar from "../CircularProgressBar/CircularProgressbar";
import { useFocusContext } from "../../store/FocusContext/FocusContext";

const FocusedToday = () => {
  const { focusSessions } = useFocusContext();
  const [todayMinutes, setTodayMinutes] = useState(0);

  useEffect(() => {
    const today = new Date();
    const todaySessions = focusSessions.filter((session) => {
      const sessionDate = new Date(session?.timestamp);
      return sessionDate.toDateString() === today.toDateString();
    });

    const totalMinutes = todaySessions.reduce((total, session) => {
      return total + Math.floor(session.duration / 60);
    }, 0);

    setTodayMinutes(totalMinutes);
  }, [focusSessions]);

  return (
    <div className="focus_today_section">
      <div className="focus_time">
        <div className="icon_container">
          <div style={{ padding: "3px" }}>
            <CircularProgressBar
              percentage={Math.min(todayMinutes, 100)}
              size={20}
              strokeWidth={2}
            />
          </div>
        </div>
        <div style={{ fontSize: "20px" }}>{todayMinutes}</div>
        <div style={{ fontSize: "20px" }}>m</div>
      </div>
      <div className="header_text">Focused Today</div>
    </div>
  );
};

export default FocusedToday;

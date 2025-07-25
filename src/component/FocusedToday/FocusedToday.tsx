import CircularProgressBar from "../CircularProgressBar/CircularProgressbar";
import { useFocusContext } from "../../store/FocusContext/FocusContext";
import { useMemo } from "react";

const FocusedToday = () => {
  const { totalFocusToday } = useFocusContext();

  const totalMinutesFocused = useMemo(() => {
    return totalFocusToday > 60 ? Math.floor(totalFocusToday / 60) : 0;
    //to persist the value set in local storage
  }, [totalFocusToday]);

  return (
    <div className="focus_today_section">
      <div className="focus_time">
        <div className="icon_container">
          <div style={{ padding: "3px" }}>
            <CircularProgressBar
              percentage={Math.min(totalMinutesFocused, 100)}
              size={20}
              strokeWidth={4}
            />
          </div>
        </div>
        <div style={{ fontSize: "20px" }}>{totalMinutesFocused}</div>
        <div style={{ fontSize: "20px" }}>m</div>
      </div>
      <div className="header_text">Focused Today</div>
    </div>
  );
};

export default FocusedToday;

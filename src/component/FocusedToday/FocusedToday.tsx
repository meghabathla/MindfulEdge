import { useEffect, useState } from "react";
import CircularProgressBar from "./CircularProgressbar";

const FocusedToday = () => {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => (prev < 100 ? prev + 1 : 100));
    }, 100);
    return () => clearInterval(timer);
  }, []);
  return (
    <div className="focus_today_section">
      <div className="focus_time">
        <div className="icon_container">
          <div style={{ padding: "3px" }}>
            <CircularProgressBar
              percentage={progress}
              size={20}
              strokeWidth={2}
            />
          </div>
        </div>
        <div style={{ fontSize: "20px" }}>{progress}</div>
        <div style={{ fontSize: "20px" }}>m</div>
      </div>
      <div className="header_text">Focused Today</div>
    </div>
  );
};

export default FocusedToday;

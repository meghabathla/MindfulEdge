import React from "react";
import DigitalClock from "../component/DigitalClock";
import PlayPause from "../component/PlayPause/PlayPause";
import FocusBreakBtn from "../component/FocusBreakBtn/FocusBreakBtn";
import FocusOnGoal from "../component/FocusOnGoal/FocusOnGoal";
import CircularProgressBar from "../component/CircularProgressBar/CircularProgressbar";
import { useFocusContext } from "../store/FocusContext/FocusContext";

const FocusPage = () => {
  const { percentage } = useFocusContext();

  return (
    <div className="page_container focus_text">
      <CircularProgressBar
        percentage={percentage}
        size={400}
        strokeWidth={8}
        transform="translateY(-31px)"
      >
        <div className="inside_progressbar_text">
          <FocusBreakBtn />
          <DigitalClock />
          <FocusOnGoal />
          <PlayPause />
        </div>
      </CircularProgressBar>
    </div>
  );
};

export default FocusPage;

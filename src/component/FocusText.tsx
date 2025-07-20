import React from "react";
import DigitalClock from "./DigitalClock";
import PlayPause from "./PlayPause/PlayPause";
import FocusBreakBtn from "./FocusBreakBtn/FocusBreakBtn";
import FocusOnGoal from "./FocusOnGoal/FocusOnGoal";
import CircularProgressBar from "./CircularProgressBar/CircularProgressbar";
import { useFocusContext } from "../store/FocusContext/FocusContext";

const FocusText = () => {
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

export default FocusText;

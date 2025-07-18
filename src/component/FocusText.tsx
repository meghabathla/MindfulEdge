import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import DigitalClock from "./DigitalClock";
import PlayPause from "./PlayPause/PlayPause";
import FocusBreakBtn from "./FocusBreakBtn/FocusBreakBtn";
import FocusOnGoal from "./FocusOnGoal/FocusOnGoal";
import CircularProgressBar from "./CircularProgressBar/CircularProgressbar";
import { useFocusContext } from "../store/FocusContext/FocusContext";

const FocusText = () => {
  const { percentage } = useFocusContext();

  return (
    <div>
      <Header />

      <div className="focus_text">
        <CircularProgressBar
          percentage={percentage}
          size={400}
          strokeWidth={8}
        />
        <div className="inside_progressbar_text">
          <FocusBreakBtn />
          <DigitalClock />
          <FocusOnGoal />
          <PlayPause />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default FocusText;

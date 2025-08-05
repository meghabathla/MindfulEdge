import PlayPause from "../component/PlayPause/PlayPause";
import FocusBreakBtn from "../component/FocusBreakBtn/FocusBreakBtn";
import CircularProgressBar from "../component/CircularProgressBar/CircularProgressbar";
import { useFocusContext } from "../store/FocusContext/FocusContext";
import CountDownTimer from "../component/CountDownTimer/CountDownTimer";
import { useEffect } from "react";
import { GoalTask } from "../component/GoalTask/GoalTask";

const FocusPage = () => {
  const { percentage, startFocus, stopFocus } = useFocusContext();

  useEffect(() => {
    startFocus();

    return () => stopFocus();
  }, []);

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
          <CountDownTimer />
          <GoalTask />
          <PlayPause />
        </div>
      </CircularProgressBar>
    </div>
  );
};

export default FocusPage;

import React from "react";
import "./FocusBreakBtn.css";
import { useFocusContext } from "../../store/FocusContext";

const FocusBreakBtn = () => {
  const { isBreakMode, toggleBreakMode } = useFocusContext();

  return (
    <div className="focus_break_button">
      <div
        className={`focus_btn ${!isBreakMode ? "active" : ""}`}
        onClick={() => !isBreakMode && toggleBreakMode()}
      >
        FOCUS
      </div>
      <div
        className={`break_btn ${isBreakMode ? "active" : ""}`}
        onClick={() => isBreakMode && toggleBreakMode()}
      >
        BREAK
      </div>
    </div>
  );
};

export default FocusBreakBtn;

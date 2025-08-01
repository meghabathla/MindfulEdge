import React from "react";
import { IoPlay } from "react-icons/io5";
import { PiPauseFill } from "react-icons/pi";
import "./PlayPause.css";
import { useFocusContext } from "../../store/FocusContext/FocusContext";

const PlayPause = () => {
  const { isFocusing } = useFocusContext();
  console.log(isFocusing);

  return (
    <div className="play_pause_button">
      {isFocusing ? (
        <PiPauseFill className="pause_icon" />
      ) : (
        <IoPlay className="play_icon" />
      )}
    </div>
  );
};

export default PlayPause;

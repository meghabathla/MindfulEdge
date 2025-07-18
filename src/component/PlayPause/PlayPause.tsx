import React from "react";
import { IoPlay } from "react-icons/io5";
import { PiPauseFill } from "react-icons/pi";
import "./PlayPause.css";
// import { useFocusContext } from "../../store/FocusContext";

const PlayPause = () => {
  // const { isPlaying, startTimer, pauseTimer } = useFocusContext();

  const isPlaying = false;

  const togglePlayPause = () => {
    // if (isPlaying) {
    //   pauseTimer();
    // } else {
    //   startTimer();
    // }
  };

  return (
    <div className="play_pause_button">
      {isPlaying ? (
        <PiPauseFill className="pause_icon" onClick={togglePlayPause} />
      ) : (
        <IoPlay className="play_icon" onClick={togglePlayPause} />
      )}
    </div>
  );
};

export default PlayPause;

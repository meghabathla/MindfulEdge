import React from "react";
import { IoPlay } from "react-icons/io5";
import { PiPauseFill } from "react-icons/pi";
import "./PlayPause.css";

const PlayPause = () => {
  return (
    <div className="play_pause_button">
      <PiPauseFill className="pause_icon" />
      <IoPlay className="play_icon" />
    </div>
  );
};

export default PlayPause;

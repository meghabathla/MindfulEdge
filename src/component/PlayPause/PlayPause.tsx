import React, { useState } from "react";
import { IoPlay } from "react-icons/io5";
import { PiPauseFill } from "react-icons/pi";
import "./PlayPause.css";

const PlayPause = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="play_pause_button">
      {isPlaying ? (
        <IoPlay className="play_icon" onClick={togglePlayPause} />
      ) : (
        <PiPauseFill className="pause_icon" onClick={togglePlayPause} />
      )}
    </div>
  );
};

export default PlayPause;

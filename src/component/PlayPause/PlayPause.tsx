import { IoPlay } from "react-icons/io5";
import { PiPauseFill } from "react-icons/pi";
import { VscDebugRestart } from "react-icons/vsc";
import "./PlayPause.css";
import { useFocusContext } from "../../store/FocusContext/FocusContext";

const PlayPause = () => {
  const { isFocusing, startFocus, stopFocus, restartFocus } = useFocusContext();

  return (
    <div className="play_pause_button">
      {isFocusing ? (
        <PiPauseFill className="pause_icon" onClick={stopFocus} />
      ) : (
        <IoPlay className="play_icon" onClick={startFocus} />
      )}
      <VscDebugRestart className="restart_icon" onClick={restartFocus} />
    </div>
  );
};

export default PlayPause;

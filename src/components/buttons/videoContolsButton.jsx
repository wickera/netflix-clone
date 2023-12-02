import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faVolumeHigh,
  faVolumeMute,
  faArrowRotateRight,
} from "@fortawesome/free-solid-svg-icons";
import "./buttons.scss";

const VideoControlsButton = ({ handleMuteToggle, handleReplay, muted }) => {
  return (
    <>
      {muted ? (
        <button
          className="video-controls-button"
          onClick={() => handleMuteToggle()}
        >
          <FontAwesomeIcon icon={faVolumeMute} />
        </button>
      ) : (
        <button
          className="video-controls-button"
          onClick={() => handleMuteToggle()}
        >
          <FontAwesomeIcon icon={faVolumeHigh} />
        </button>
      )}
      <button className="video-controls-button" onClick={() => handleReplay()}>
        <FontAwesomeIcon icon={faArrowRotateRight} />
      </button>
    </>
  );
};

export default VideoControlsButton;

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import "./buttons.scss";

const PlayButton = () => {
  return (
    <button className="play-button">
      <FontAwesomeIcon icon={faPlay} className="play-button__icon" />
      <span className="play-button__text">Play</span>
    </button>
  );
};

export default PlayButton;

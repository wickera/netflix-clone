import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";
import "./buttons.scss";

const MoreInfoButton = () => {
  return (
    <button className="more-info-button">
      <FontAwesomeIcon
        icon={faCircleInfo}
        className="more-info-button__icon-white"
      />
      <span className="more-info-button__text">More Info</span>
    </button>
  );
};

export default MoreInfoButton;

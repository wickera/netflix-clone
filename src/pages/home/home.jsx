import HomeVideoPlayer from "../../components/video/homeVideo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRotateRight } from "@fortawesome/free-solid-svg-icons";
import "./home.css";

function Home() {
  return (
    <div className="home">
      <HomeVideoPlayer videoId="FAno-D3PAq8" />
      <div className="home-preview">
        <div className="home-preview-info">
          <p>LEO</p>
          <button className="play-button">Play</button>
          <button className="more-info-button">More Info</button>
        </div>
        <div className="home-preview-rating">
          <button className="mute-button">
            <FontAwesomeIcon
              icon={faRotateRight}
              className="mute-button-icon"
            />
          </button>
          <p>Rating</p>
        </div>
      </div>
    </div>
  );
}

export default Home;

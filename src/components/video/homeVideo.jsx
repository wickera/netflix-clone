import { useState, useEffect } from "react";
import YouTube from "react-youtube";
import apiKey from "../../api/youtube";
import "./video.css";

const HomeVideoPlayer = ({ videoId }) => {
  const [height, setHeight] = useState(window.innerHeight * 0.85);
  const [width, setWidth] = useState(window.innerWidth);

  const handleResize = () => {
    setHeight(window.innerHeight);
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [width, height]);

  const options = {
    height,
    width,
    playerVars: {
      key: apiKey,
      autoplay: 1,
      controls: 0,
      disablekb: 1,
      modestbranding: 1,
    },
  };

  return (
    <YouTube
      videoId={videoId}
      opts={options}
      className="home-video"
      iframeClassName="home-video-iframe"
      title=""
    />
  );
};

export default HomeVideoPlayer;

import { useState, useEffect } from "react";
import YouTube from "react-youtube";
import apiKey from "../../api/youtube";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchMovieVideosById,
  selectMovieVideosById,
} from "../../redux/slices/moviesSlice";
import "./video.scss";

const HeaderVideoPlayer = ({ movieId, playerRef, onReady }) => {
  const dispatch = useDispatch();
  const videos = useSelector(selectMovieVideosById);
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

  useEffect(() => {
    const fetchData = () => {
      dispatch(fetchMovieVideosById(movieId));
    };
    fetchData();
  }, [dispatch, movieId]);

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
      videoId={videos[0]?.key}
      opts={options}
      className="home-video"
      iframeClassName="home-video-iframe"
      onReady={onReady}
      ref={playerRef}
    />
  );
};

export default HeaderVideoPlayer;

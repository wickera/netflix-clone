import { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import Row from "../../components/row/row";
import HeaderVideoPlayer from "../../components/video/headerVideoPlayer";
import PlayButton from "../../components/buttons/playButton";
import MoreInfoButton from "../../components/buttons/moreInfoButton";
import VideoControlsButton from "../../components/buttons/videoContolsButton";
import {
  fetchTrendingMovies,
  selectTrendingMovies,
} from "../../redux/slices/moviesSlice";
import "./browse.scss";
import "../home/home.scss";

export default function Movies() {
  const dispatch = useDispatch();
  const trendingMovies = useSelector(selectTrendingMovies);
  const [muted, setMuted] = useState(false);
  const playerRef = useRef(null);

  const handleMuteToggle = () => {
    const player = playerRef.current.internalPlayer;
    if (player) {
      muted ? player.unMute() : player.mute();
      setMuted((muted) => !muted);
    }
  };

  const handleReplay = () => {
    const player = playerRef.current.internalPlayer;
    if (player) {
      player.seekTo(0);
      player.playVideo();
    }
  };

  const _onReady = () => {
    const player = playerRef.current.internalPlayer;
    player.playVideo();
    player.unMute();
  };

  useEffect(() => {
    const fetchData = () => {
      dispatch(fetchTrendingMovies());
    };

    fetchData();
  }, [dispatch]);

  return (
    <>
      <div className="home">
        <HeaderVideoPlayer
          movieId={trendingMovies[0]?.id}
          playerRef={playerRef}
          onReady={_onReady}
        />
        <div className="home-preview">
          <div className="home-preview__info">
            <h3>Movies</h3>
            <button>Genres</button>
            {trendingMovies[0] ? (
              <>
                <h4>{trendingMovies[0].title}</h4>
                <p>{trendingMovies[0].overview}</p>
              </>
            ) : (
              <p>Loading ... </p>
            )}
            <PlayButton />
            <MoreInfoButton />
          </div>
          <div className="home-preview-rating">
            <VideoControlsButton
              handleReplay={handleReplay}
              handleMuteToggle={handleMuteToggle}
              muted={muted}
            />
            {trendingMovies[0] ? (
              <p className="home-preview-rating__score">
                {trendingMovies[0].vote_average}
              </p>
            ) : (
              <p>Loading ... </p>
            )}
          </div>
        </div>
      </div>
      <div className="rows-start">
        <Row title="Trending Movies" items={trendingMovies} />
      </div>
    </>
  );
}

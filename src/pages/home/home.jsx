import { useEffect, useRef, useState } from "react";
import HomeVideoPlayer from "../../components/video/homeVideo";
import Row from "../../components/row/row";
import PlayButton from "../../components/buttons/playButton";
import MoreInfoButton from "../../components/buttons/moreInfoButton";
import VideoControlsButton from "../../components/buttons/videoContolsButton";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchPopularMovies,
  selectPopularMovies,
  fetchNowPlayingMovies,
  selectNowPlayingMovies,
  fetchUpcomingMovies,
  selectUpcomingMovies,
  fetchTopRatedMovies,
  selectTopRatedMovies,
  fetchTrendingMovies,
  selectTrendingMovies,
} from "../../redux/slices/moviesSlice";
import {
  fetchPopularShows,
  selectPopularShows,
  fetchTopRatedShows,
  selectTopRatedShows,
} from "../../redux/slices/showsSlice";
import "./home.scss";

function Home() {
  const dispatch = useDispatch();
  const popularMovies = useSelector(selectPopularMovies);
  const nowPlayingMovies = useSelector(selectNowPlayingMovies);
  const upcomingMovies = useSelector(selectUpcomingMovies);
  const topRatedMovies = useSelector(selectTopRatedMovies);
  const trendingMovies = useSelector(selectTrendingMovies);
  const popularShows = useSelector(selectPopularShows);
  const topRatedShows = useSelector(selectTopRatedShows);
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
      dispatch(fetchPopularMovies());
      dispatch(fetchNowPlayingMovies());
      dispatch(fetchUpcomingMovies());
      dispatch(fetchTopRatedMovies());
      dispatch(fetchTrendingMovies());
      dispatch(fetchPopularShows());
      dispatch(fetchTopRatedShows());
    };

    fetchData();
  }, [dispatch]);

  return (
    <>
      <div className="home">
        <HomeVideoPlayer
          movieId={popularMovies[0]?.id}
          playerRef={playerRef}
          onReady={_onReady}
        />
        <div className="home-preview">
          <div className="home-preview__info">
            {popularMovies[0] ? (
              <>
                <h4>{popularMovies[0].title}</h4>
                <p>{popularMovies[0].overview}</p>
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
            {popularMovies[0] ? (
              <p className="home-preview-rating__score">
                {popularMovies[0].vote_average}
              </p>
            ) : (
              <p>Loading ... </p>
            )}
          </div>
        </div>
      </div>
      <div className="rows-start">
        <Row title="Popular Movies" items={popularMovies} />
        <Row title="Now Playing Movies" items={nowPlayingMovies} />
        <Row title="Upcoming Movies" items={upcomingMovies} />
        <Row title="Top Rated Movies" items={topRatedMovies} />
        <Row title="Trending Movies" items={trendingMovies} />
        <Row title="Popular TV Shows" items={popularShows} />
        <Row title="Top Rated TV Shows" items={topRatedShows} />
      </div>
    </>
  );
}

export default Home;

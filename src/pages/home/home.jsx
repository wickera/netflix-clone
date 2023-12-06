import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import HeaderVideoPlayer from "../../components/video/headerVideoPlayer";
import Row from "../../components/row/row";
import PlayButton from "../../components/buttons/playButton";
import MoreInfoButton from "../../components/buttons/moreInfoButton";
import VideoControlsButton from "../../components/buttons/videoContolsButton";
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

  const shuffled = (arr) => {
    const shuffled = [...arr];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  const handleMuteToggle = () => {
    const player = playerRef.current.internalPlayer;
    if (player) {
      console.log(player);
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
        <HeaderVideoPlayer
          movieId={popularMovies[0]?.id}
          playerRef={playerRef}
          onReady={_onReady}
        />
        <div className="home__header-video">
          <div className="home__header-video--details">
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
          <div className="home__header-video--controls">
            <VideoControlsButton
              handleReplay={handleReplay}
              handleMuteToggle={handleMuteToggle}
              muted={muted}
            />
            {popularMovies[0] ? (
              <p className="home__header-video--controls--rating">
                {popularMovies[0].vote_average}
              </p>
            ) : (
              <p>Loading ... </p>
            )}
          </div>
        </div>
      </div>
      <div className="home__rows">
        <Row title="Popular Movies" items={shuffled(popularMovies)} />
        <Row title="Now Playing Movies" items={shuffled(nowPlayingMovies)} />
        <Row title="Upcoming Movies" items={shuffled(upcomingMovies)} />
        <Row title="Top Rated Movies" items={shuffled(topRatedMovies)} />
        <Row title="Trending Movies" items={shuffled(trendingMovies)} />
        <Row title="Popular TV Shows" items={shuffled(popularShows)} />
        <Row title="Top Rated TV Shows" items={shuffled(topRatedShows)} />
      </div>
    </>
  );
}

export default Home;

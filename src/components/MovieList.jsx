import React, { useEffect } from "react";
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
} from "../slices/topMoviesSlice";

import Row from "./row/row";

const MovieList = () => {
  const dispatch = useDispatch();
  const popularMovies = useSelector(selectPopularMovies);
  const nowPlayingMovies = useSelector(selectNowPlayingMovies);
  const upcomingMovies = useSelector(selectUpcomingMovies);
  const topRatedMovies = useSelector(selectTopRatedMovies);
  const trendingMovies = useSelector(selectTrendingMovies);
  const status = useSelector((state) => state.topMovies.status);
  const error = useSelector((state) => state.topMovies.error);

  useEffect(() => {
    const fetchData = () => {
      dispatch(fetchPopularMovies());
      dispatch(fetchNowPlayingMovies());
      dispatch(fetchUpcomingMovies());
      dispatch(fetchTopRatedMovies());
      dispatch(fetchTrendingMovies());
    };

    if (status === "idle") {
      fetchData();
    }
  }, [dispatch, status]);

  return (
    <>
      <Row title="Popular Movies" items={popularMovies} />
      <Row title="Now Playing Movies" items={nowPlayingMovies} />
    </>
  );
};

const getImageUrl = (path) => `https://image.tmdb.org/t/p/w500${path}`;

export default MovieList;

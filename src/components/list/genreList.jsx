import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchMoviesByGenre,
  selectMoviesByGenre,
  fetchTVByGenre,
  selectTVByGenre,
} from "../../store/slices/genreSlice";

import Row from "../row/row";

const GenreList = () => {
  const dispatch = useDispatch();
  const comedyMovies = useSelector(selectMoviesByGenre);
  const dramaTV = useSelector(selectTVByGenre);
  const status = useSelector((state) => state.genre.status);
  const error = useSelector((state) => state.genre.error);

  useEffect(() => {
    const fetchData = () => {
      dispatch(fetchMoviesByGenre("35"));
      dispatch(fetchTVByGenre("18"));
    };

    if (status === "idle") {
      fetchData();
    }
  }, [dispatch, status]);

  return (
    <>
      <Row title="Comedy Movies" items={comedyMovies} />
      <Row title="Drama TV Shows" items={dramaTV} />
    </>
  );
};

const getImageUrl = (path) => `https://image.tmdb.org/t/p/w500${path}`;

export default GenreList;

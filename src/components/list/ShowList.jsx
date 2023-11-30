import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchPopularShows,
  selectPopularShows,
  fetchTopRatedShows,
  selectTopRatedShows,
} from "../store/slices/topShowsSlice";

import Row from "./row/row";

const ShowList = () => {
  const dispatch = useDispatch();
  const popularShows = useSelector(selectPopularShows);
  const topRatedShows = useSelector(selectTopRatedShows);
  const status = useSelector((state) => state.topShows.status);
  const error = useSelector((state) => state.topShows.error);

  useEffect(() => {
    const fetchData = () => {
      dispatch(fetchPopularShows());
      dispatch(fetchTopRatedShows());
    };

    if (status === "idle") {
      fetchData();
    }
  }, [dispatch, status]);

  return <Row title="Top Rated TV Shows" items={topRatedShows} />;
};

const getImageUrl = (path) => `https://image.tmdb.org/t/p/w500${path}`;

export default ShowList;

import { configureStore } from "@reduxjs/toolkit";
import topMoviesSlice from "../slices/topMoviesSlice";
import topShowsSlice from "../slices/topShowsSlice";

export const store = configureStore({
  reducer: {
    topMovies: topMoviesSlice,
    topShows: topShowsSlice,
  },
});

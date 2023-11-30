import { configureStore } from "@reduxjs/toolkit";
import topMoviesSlice from "./slices/topMoviesSlice";
import topShowsSlice from "./slices/topShowsSlice";
import genreSlice from "./slices/genreSlice";

export const store = configureStore({
  reducer: {
    topMovies: topMoviesSlice,
    topShows: topShowsSlice,
    genre: genreSlice,
  },
});

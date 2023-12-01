import { configureStore } from "@reduxjs/toolkit";
import moviesSlice from "./slices/moviesSlice";
import showsSlice from "./slices/showsSlice";

export const store = configureStore({
  reducer: {
    movies: moviesSlice,
    shows: showsSlice,
  },
});

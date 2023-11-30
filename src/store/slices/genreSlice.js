import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { baseURL, options } from "../../api/tmdb";

export const fetchMoviesByGenre = createAsyncThunk(
  "content/fetchMoviesByGenre",
  async (genreId) => {
    const response = await axios.get(
      `${baseURL}/discover/movie?with_genre=${genreId}`,
      options
    );
    console.log("Genre Query Response: ", response.data.results);
    console.log("Genre ID: ", genreId);
    return response.data.results;
  }
);

export const fetchTVByGenre = createAsyncThunk(
  "content/fetchTVByGenre",
  async (genreId) => {
    const response = await axios.get(
      `${baseURL}/discover/tv?with_genre=${genreId}`,
      options
    );
    console.log("Genre Query Response: ", response.data.results);
    console.log("Genre ID: ", genreId);
    return response.data.results;
  }
);

export const genreSlice = createSlice({
  name: "genre",
  initialState: {
    moviesByGenre: [],
    tvByGenre: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMoviesByGenre.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchMoviesByGenre.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.moviesByGenre = action.payload;
      })
      .addCase(fetchMoviesByGenre.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(fetchTVByGenre.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchTVByGenre.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.tvByGenre = action.payload;
      })
      .addCase(fetchTVByGenre.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const selectMoviesByGenre = (state) => state.genre.moviesByGenre;
export const selectTVByGenre = (state) => state.genre.tvByGenre;

export default genreSlice.reducer;

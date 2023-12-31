import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { baseURL, options } from "../../api/tmdb";

export const fetchPopularShows = createAsyncThunk(
  "shows/fetchPopularShows",
  async () => {
    const response = await axios.get(`${baseURL}/tv/popular`, options);
    return response.data.results;
  }
);

export const fetchTopRatedShows = createAsyncThunk(
  "shows/fetchTopRatedShows",
  async () => {
    const response = await axios.get(`${baseURL}/tv/top_rated`, options);
    return response.data.results;
  }
);

export const fetchShowsByGenre = createAsyncThunk(
  "shows/fetchShowsByGenre",
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

export const showsSlice = createSlice({
  name: "shows",
  initialState: {
    popularShows: [],
    topRatedShows: [],
    showsByGenre: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPopularShows.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchPopularShows.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.popularShows = action.payload;
      })
      .addCase(fetchPopularShows.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(fetchTopRatedShows.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchTopRatedShows.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.topRatedShows = action.payload;
      })
      .addCase(fetchTopRatedShows.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(fetchShowsByGenre.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchShowsByGenre.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.showsByGenre = action.payload;
      })
      .addCase(fetchShowsByGenre.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const selectPopularShows = (state) => state.shows.popularShows;
export const selectTopRatedShows = (state) => state.shows.topRatedShows;
export const selectShowsByGenre = (state) => state.shows.showsByGenre;

export default showsSlice.reducer;

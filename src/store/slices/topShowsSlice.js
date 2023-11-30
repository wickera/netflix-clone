import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { baseURL, options } from "../../api/tmdb";

export const fetchPopularShows = createAsyncThunk(
  "tv/fetchPopularShows",
  async () => {
    const response = await axios.get(`${baseURL}/tv/popular`, options);
    return response.data.results;
  }
);

export const fetchTopRatedShows = createAsyncThunk(
  "tv/fetchTopRatedShows",
  async () => {
    const response = await axios.get(`${baseURL}/tv/top_rated`, options);
    return response.data.results;
  }
);

export const topShowsSlice = createSlice({
  name: "topShows",
  initialState: {
    popularShows: [],
    topRatedShows: [],
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
      });
  },
});

export const selectPopularShows = (state) => state.topShows.popularShows;
export const selectTopRatedShows = (state) => state.topShows.topRatedShows;

export default topShowsSlice.reducer;

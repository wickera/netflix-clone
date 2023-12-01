import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { baseURL, options } from "../../api/tmdb";

export const fetchPopularMovies = createAsyncThunk(
  "movies/fetchPopularMovies",
  async () => {
    const response = await axios.get(`${baseURL}/movie/popular`, options);
    return response.data.results;
  }
);

export const fetchNowPlayingMovies = createAsyncThunk(
  "movies/fetchNowPlayingMovies",
  async () => {
    const response = await axios.get(`${baseURL}/movie/now_playing`, options);
    return response.data.results;
  }
);

export const fetchUpcomingMovies = createAsyncThunk(
  "movies/fetchUpcomingMovies",
  async () => {
    const response = await axios.get(`${baseURL}/movie/upcoming`, options);
    return response.data.results;
  }
);

export const fetchTopRatedMovies = createAsyncThunk(
  "movies/fetchTopRatedMovies",
  async () => {
    const response = await axios.get(`${baseURL}/movie/top_rated`, options);
    return response.data.results;
  }
);

export const fetchTrendingMovies = createAsyncThunk(
  "movies/fetchTrendingMovies",
  async () => {
    const response = await axios.get(`${baseURL}/trending/movie/week`, options);
    return response.data.results;
  }
);

export const fetchMoviesByGenre = createAsyncThunk(
  "movies/fetchMoviesByGenre",
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

export const fetchMovieVideosById = createAsyncThunk(
  "movies/fetchMovieVideoById",
  async (id) => {
    const response = await axios.get(`${baseURL}/movie/${id}/videos`, options);
    return response.data.results;
  }
);

export const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    popularMovies: [],
    nowPlayingMovies: [],
    upcomingMovies: [],
    topRatedMovies: [],
    trendingMovies: [],
    moviesByGenre: [],
    movieVideos: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPopularMovies.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchPopularMovies.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.popularMovies = action.payload;
      })
      .addCase(fetchPopularMovies.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(fetchNowPlayingMovies.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchNowPlayingMovies.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.nowPlayingMovies = action.payload;
      })
      .addCase(fetchNowPlayingMovies.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(fetchUpcomingMovies.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchUpcomingMovies.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.upcomingMovies = action.payload;
      })
      .addCase(fetchUpcomingMovies.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(fetchTopRatedMovies.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchTopRatedMovies.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.topRatedMovies = action.payload;
      })
      .addCase(fetchTopRatedMovies.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(fetchTrendingMovies.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchTrendingMovies.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.trendingMovies = action.payload;
      })
      .addCase(fetchTrendingMovies.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
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
      .addCase(fetchMovieVideosById.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchMovieVideosById.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.movieVideos = action.payload;
      })
      .addCase(fetchMovieVideosById.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const selectPopularMovies = (state) => state.movies.popularMovies;
export const selectNowPlayingMovies = (state) => state.movies.nowPlayingMovies;
export const selectUpcomingMovies = (state) => state.movies.upcomingMovies;
export const selectTopRatedMovies = (state) => state.movies.topRatedMovies;
export const selectTrendingMovies = (state) => state.movies.trendingMovies;
export const selectMoviesByGenre = (state) => state.movies.moviesByGenre;
export const selectMovieVideosById = (state) => state.movies.movieVideos;

export default moviesSlice.reducer;

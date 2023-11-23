export const apiKey = import.meta.env.VITE_TMDB_API_KEY;
export const baseURL = "https://api.themoviedb.org/3";

export const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${apiKey}`,
  },
};

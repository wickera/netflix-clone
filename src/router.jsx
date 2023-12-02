import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/home";
import Movies from "./pages/browse/movies";
import Shows from "./pages/browse/shows";
import Languages from "./pages/browse/languages";
import SearchResults from "./pages/browse/searchResults";

const Router = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/movies" element={<Movies />} />
      <Route path="/tv-shows" element={<Shows />} />
      <Route path="/browse-by-languages" element={<Languages />} />
      <Route path="/search-results" element={<SearchResults />} />
    </Routes>
  );
};

export default Router;

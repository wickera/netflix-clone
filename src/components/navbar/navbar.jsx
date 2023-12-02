import { Link } from "react-router-dom";
import netflix from "../../assets/images/netflix-logo.png";
import Search from "../search/search";
import "./navbar.scss";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar__section">
        <img src={netflix} className="navbar__section--icon" />
        <Link to="/" className="navbar__section--link">
          Home
        </Link>
        <Link to="/tv-shows" className="navbar__section--link">
          TV Shows
        </Link>
        <Link to="/movies" className="navbar__section--link">
          Movies
        </Link>
        <Link to="/browse-by-language" className="navbar__section--link">
          Browse by Languages
        </Link>
      </div>
      <div className="navbar__section">
        {/* <Link to="/search-results" className="navbar__section--link"> */}
        <Search />
        {/* </Link> */}
      </div>
    </div>
  );
};

export default Navbar;

import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import "./search.scss";

const Search = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {open ? (
        <div className="search-wrapper">
          <button
            onClick={() => setOpen((open) => !open)}
            className="search-wrapper__button"
          >
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              className="search-wrapper__button--icon"
            />
          </button>
          <input
            className="search-wrapper__input"
            placeholder="Titles, people, genres"
          />
        </div>
      ) : (
        <button
          onClick={() => setOpen((open) => !open)}
          className="search-button"
        >
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            className="search-button__icon"
          />
        </button>
      )}
    </>
  );
};

export default Search;

import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import "./search.scss";

export default function Search() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {open ? (
        <div className="search-wrapper">
          <label htmlFor="searchInput" className="screen-reader-only">
            Search:
          </label>
          <button
            onClick={() => setOpen((open) => !open)}
            className="search-wrapper__button"
            aria-expanded={open}
            aria-label="Close Search"
          >
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              className="search-wrapper__button--icon"
            />
          </button>
          <input
            id="searchInput"
            className="search-wrapper__input"
            placeholder="Titles, people, genres"
            aria-expanded={open}
            aria-label="Search"
          />
        </div>
      ) : (
        <button
          onClick={() => setOpen((open) => !open)}
          className="search-button"
          aria-expanded={open}
          aria-label="Open Search"
        >
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            className="search-button__icon"
          />
        </button>
      )}
    </>
  );
}

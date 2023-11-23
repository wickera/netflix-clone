import React, { useRef } from "react";
import "./row.css";

const getImageUrl = (path) => `https://image.tmdb.org/t/p/w500${path}`;

const Row = ({ items, title }) => {
  const scrollContainerRef = useRef(null);

  const scrollContent = (direction) => {
    const scrollAmount = 300;
    const currentScrollPosition = scrollContainerRef.current.scrollLeft;
    const newScrollPosition = currentScrollPosition + direction * scrollAmount;

    scrollContainerRef.current.scrollTo({
      left: newScrollPosition,
      behavior: "smooth",
    });
  };

  return (
    <div className="row-container">
      <button
        className="scroll-button scroll-left"
        onClick={() => scrollContent(-1)}
      >
        1
      </button>
      <div className="horizontal" ref={scrollContainerRef}>
        <div className="scroll-content">
          {items &&
            items.map((show) => {
              return (
                <div key={show.id} className="item">
                  <img
                    src={getImageUrl(show.backdrop_path)}
                    alt="TV Show Poster"
                    className="image"
                  />
                  <p>{!show.name ? show.title : show.name}</p>
                </div>
              );
            })}
        </div>
      </div>
      <button
        className="scroll-button scroll-right"
        onClick={() => scrollContent(1)}
      >
        2
      </button>
    </div>
  );
};

export default Row;

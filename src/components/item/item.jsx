import { useState, useRef } from "react";

const getImageUrl = (path) => `https://image.tmdb.org/t/p/w500${path}`;

export default function Item(props) {
  return (
    <div className="item">
      <img
        src={getImageUrl(props.image)}
        alt="TV Show Poster"
        className="image"
        style={{ width: `calc(${props.width}px)` }}
      />
    </div>
  );
}

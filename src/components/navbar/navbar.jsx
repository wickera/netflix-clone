import React from "react";
import Slider from "react-slick";

const Row = ({ children }, title) => {
  const settings = {
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1200,
      },
    ],
  };
  return (
    <div>
      <h4>{title}</h4>
      {children}
    </div>
  );
};

export default Row;

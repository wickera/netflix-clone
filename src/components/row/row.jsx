import React, { useRef, useState, useEffect } from "react";
import Item from "../item/item";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";
import "./row.css";

const Row = ({ items }) => {
  const scrollContainerRef = useRef(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [imageWidth, setImageWidth] = useState(window.innerWidth / 6);
  const itemsPerPage = 6;

  const updateWindowWidth = () => {
    const newWindowWidth = window.innerWidth;
    setWindowWidth(newWindowWidth);
    setImageWidth(newWindowWidth / 6);
  };

  useEffect(() => {
    updateWindowWidth();

    const handleResize = () => {
      updateWindowWidth();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [windowWidth]);

  const handleScroll = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const scrollPrevious = () => {
    const prevPage = currentPage - 1;
    if (prevPage >= 1) {
      handleScroll(prevPage);
      scrollContainerRef.current.scrollLeft -= windowWidth - imageWidth / 3.5;
    }
  };

  const scrollNext = () => {
    const nextPage = currentPage + 1;
    if (nextPage <= pagesToScroll.length) {
      handleScroll(nextPage);
      scrollContainerRef.current.scrollLeft += windowWidth - imageWidth / 3.5;
    }
  };

  const scrollableElements = (content, itemsPerPage) => {
    const segments = [];

    for (let i = 0; i < content.length; i += itemsPerPage) {
      const segmentedContent = content.slice(i, i + itemsPerPage);
      segments.push(segmentedContent);
    }

    return segments;
  };

  const pagesToScroll = scrollableElements(items, itemsPerPage);

  return (
    <div className="row-container">
      <button
        className="scroll-button scroll-left"
        onClick={() => scrollPrevious()}
        disabled={currentPage === 1}
      >
        <FontAwesomeIcon icon={faChevronLeft} className="chevron-left" />
      </button>
      <div className="scroll-container" ref={scrollContainerRef}>
        {items &&
          pagesToScroll.map((page, index) => {
            return (
              <div key={index} className="page">
                {page.map((show) => {
                  return (
                    <Item
                      key={show.id}
                      image={show.backdrop_path}
                      width={imageWidth}
                      showName={show.name}
                      showTitle={show.title}
                    />
                  );
                })}
              </div>
            );
          })}
      </div>
      <button
        className="scroll-button scroll-right"
        onClick={() => scrollNext()}
        disabled={currentPage === pagesToScroll}
      >
        <FontAwesomeIcon icon={faChevronRight} className="chevron-right" />
      </button>
    </div>
  );
};

export default Row;

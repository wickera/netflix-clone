import React, { useRef, useState, useEffect } from "react";
import Item from "../item/item";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";
import "./row.scss";

const Row = ({ title, items }) => {
  const scrollContainerRef = useRef(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [pageWidth, setPageWidth] = useState(windowWidth * 0.94);
  const [buttonWidth, setButtonWidth] = useState(windowWidth * 0.03);
  const [imageWidth, setImageWidth] = useState(pageWidth / 6);
  const itemsPerPage = 6;

  const updateWindowWidth = () => {
    const newWindowWidth = window.innerWidth;
    setWindowWidth(newWindowWidth);
    setButtonWidth(newWindowWidth * 0.03);
    setPageWidth(newWindowWidth * 0.94);
    setImageWidth(pageWidth / 6);
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
  }, []);

  const handleScroll = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const scrollPrevious = () => {
    const prevPage = currentPage - 1;
    if (prevPage >= 1) {
      handleScroll(prevPage);
      scrollContainerRef.current.scrollLeft -= pageWidth;
    }
  };

  const scrollNext = () => {
    const nextPage = currentPage + 1;
    if (nextPage <= pagesToScroll.length) {
      handleScroll(nextPage);
      scrollContainerRef.current.scrollLeft += pageWidth;
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
    <div className="row">
      <h4 className="row__title">{title}</h4>
      <div className="row__container">
        <button
          className="row__container--scroll-button row__container--scroll-button--scroll-left"
          onClick={() => scrollPrevious()}
          disabled={currentPage === 1}
          style={{ width: buttonWidth }}
        >
          <FontAwesomeIcon icon={faChevronLeft} className="chevron-left" />
        </button>
        <div
          className="row__container--scroll-container"
          ref={scrollContainerRef}
        >
          {items &&
            pagesToScroll.map((page, index) => {
              return (
                <div
                  key={index}
                  className="row__container--scroll-container--page"
                  style={{ width: pageWidth }}
                >
                  {page.map((show) => {
                    return (
                      <Item
                        key={show.id}
                        image={
                          show.backdrop_path
                            ? show.backdrop_path
                            : show.poster_path
                        }
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
          className="row__container--scroll-button row__container--scroll-button--scroll-right"
          onClick={() => scrollNext()}
          disabled={currentPage === pagesToScroll}
          style={{ width: buttonWidth }}
        >
          <FontAwesomeIcon icon={faChevronRight} className="chevron-right" />
        </button>
      </div>
    </div>
  );
};

export default Row;

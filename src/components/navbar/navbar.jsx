import React from "react";
import "./navbar.scss";

const Navbar = () => {
  return (
    <div className="navbar">
      <ul className="links left">
        <li>Netflix</li>
        <li>Home</li>
        <li>TV Shows</li>
        <li>Movies</li>
        <li>New & Popular</li>
        <li>Browse by Languages</li>
      </ul>
      <ul className="links right">
        <li>Search</li>
      </ul>
    </div>
  );
};

export default Navbar;

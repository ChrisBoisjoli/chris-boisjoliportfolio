import React from "react";
import { Link, useLocation } from "react-router-dom";

function NavTabs() {
  
  const location = useLocation();

  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <Link to="/" className={location.pathname === "/" ? "nav-link active" : "nav-link"}>
          Portfolio
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/about"
          className={location.pathname === "/about" ? "nav-link active" : "nav-link"}
        >
          About
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/blog"
          className={location.pathname === "/blog" ? "nav-link active" : "nav-link"}
        >
          Blog not used
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/contact"
          className={location.pathname === "/contact" ? "nav-link active" : "nav-link"}
        >
          Contact not used
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/contact/learn"
          className={location.pathname === "/contact/learn" ? "nav-link active" : "nav-link"}
        >
          Learn not used
        </Link>
      </li>
    </ul>
  );
}

export default NavTabs;

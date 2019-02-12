import "font-awesome/css/font-awesome.min.css";
import { Link } from "gatsby";
import React from "react";
import FontAwesome from "react-fontawesome";

const Navbar = () => (
  <nav className="navbar">
    <div className="container">
      <div className="navbar-brand">
        <Link to="/" className="navbar-item logo">
          CHRISCREAT.ES
        </Link>
      </div>
      <div className="navbar-start">
        <Link className="navbar-item" to="/web">
          Web
        </Link>
        <Link className="navbar-item" to="/photography">
          Photography
        </Link>
        <Link className="navbar-item" to="/blog">
          Blog
        </Link>
      </div>
      <div className="navbar-end">
        <a
          className="navbar-item"
          href="https://github.com/lucasaid/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="icon">
            <FontAwesome name="github" />
          </span>
        </a>
        <a
          className="navbar-item"
          href="https://codepen.io/chriscreates/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="icon">
            <FontAwesome name="codepen" />
          </span>
        </a>
        <a
          className="navbar-item"
          href="https://www.linkedin.com/in/chris-lucas-83619286/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="icon">
            <FontAwesome name="linkedin" />
          </span>
        </a>
        <a
          className="navbar-item"
          href="https://twitter.com/chriscre8s"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="icon">
            <FontAwesome name="twitter" />
          </span>
        </a>
        <a
          className="navbar-item"
          href="https://www.instagram.com/chriscre8s/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="icon">
            <FontAwesome name="instagram" />
          </span>
        </a>
      </div>
    </div>
  </nav>
);

export default Navbar;

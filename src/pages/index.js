import React from "react";
import FontAwesome from "react-fontawesome";
import "font-awesome/css/font-awesome.min.css";
import profileImage from "../img/profile.jpg";
export default class IndexPage extends React.Component {
  render() {
    return (
      <div className="container">
        <header>
          <h1>CHRISCREAT.ES</h1>
          <div className="profile">
            <img src={profileImage} className="profile__image" />
          </div>
        </header>
        <section className="description">
          Front End Web Developer @ Hardhat
          <br />
          Hobby Photographer
          <br />
          Gamer
          <br />
          <br />
          Melbourne, Australia
        </section>
        <section className="links">
          <a
            className="link"
            href="https://github.com/lucasaid/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="icon">
              <FontAwesome name="github" />
            </span>
          </a>
          <a
            className="link"
            href="https://codepen.io/chriscreates/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="icon">
              <FontAwesome name="codepen" />
            </span>
          </a>
          <a
            className="link"
            href="https://www.linkedin.com/in/chris-lucas-83619286/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="icon">
              <FontAwesome name="linkedin" />
            </span>
          </a>
          <a
            className="link"
            href="https://twitter.com/chriscre8s"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="icon">
              <FontAwesome name="twitter" />
            </span>
          </a>
          <a
            className="link"
            href="https://www.instagram.com/chriscre8s/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="icon">
              <FontAwesome name="instagram" />
            </span>
          </a>
        </section>
      </div>
    );
  }
}

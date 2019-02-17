import React from "react";
import FontAwesome from "react-fontawesome";
import profileImage from "../img/profile.jpg";
import "../vendor/font-awesome/css/font-awesome.css";

import MainLayout from "../layouts/main";
export default class IndexPage extends React.Component {
  render() {
    return (
      <MainLayout>
        <div className="container">
          <header>
            <h2>CHRISCREAT.ES</h2>
            <div className="profile">
              <img
                src={profileImage}
                className="profile__image"
                alt="Chris Lucas"
              />
            </div>
          </header>
          <section className="description">
            <h1>
              CHRIS LUCAS
              <br />
              Front End Web Developer
            </h1>
            <br />
            Currently @ Hardhat
            <br />
            Hobby Photographer
            <br />
            Gamer
            <br />
            <br />
            <em>Melbourne, Australia</em>
          </section>
          <section className="links">
            <a
              className="link"
              href="https://github.com/lucasaid/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="link_text">github</span>
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
              <span className="link_text">codepen</span>
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
              <span className="link_text">linkedin</span>
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
              <span className="link_text">twitter</span>
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
              <span className="link_text">instagram</span>
              <span className="icon">
                <FontAwesome name="instagram" />
              </span>
            </a>
          </section>
        </div>
      </MainLayout>
    );
  }
}

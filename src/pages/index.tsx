import { graphql } from "gatsby";
import Img from "gatsby-image";
import React from "react";
import FontAwesome from "react-fontawesome";
import TransLink from "../components/TransLink";
import "../vendor/font-awesome/css/font-awesome.css";

import MainLayout from "../layouts/main";

interface Props {
  data: {
    file: {
      childImageSharp: {
        fluid: any;
      };
    };
  };
}

class IndexPage extends React.Component<Props> {
  render() {
    return (
      <MainLayout>
        <div className="container">
          <header>
            <h1>CHRIS LUCAS</h1>
            <div className="profile">
              <Img
                className="profile__image"
                alt="Chris Lucas"
                fluid={this.props.data.file.childImageSharp.fluid}
              />
            </div>
          </header>
          <section className="description">
            <h2>Front End Developer</h2>
            <br />
            Currently @ <a href="https://www.skedulo.com/" target="_blank">Skedulo</a>
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

export default IndexPage;
export const query = graphql`
  query {
    file(relativePath: { eq: "profile.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
  }
`;

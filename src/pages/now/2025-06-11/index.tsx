import React from "react";

import MainLayout from "../../../layouts/main";
import { Heading, Image, Container, Content } from "./../now.styles";
import { graphql, Link } from "gatsby";
const IndexPage = (props) => {
  return (
    <MainLayout>
      <Container>
        <Heading>
          What happened 11th June 2025?
        </Heading>
        <div>
          Inspired by <Link to="https://sive.rs/" target="_blank">Derek Sivers</Link> concept of <Link to="https://nownownow.com/about" target="_blank">/now</Link> pages
        
        </div>
        <Content>
        <Link to="/now">&lt;&lt; Back</Link>
        <br />
        <br />
        <h2>What I'm doing now?</h2>
        <br />
        <p>
          After my last update, I unfortunately was made redundant from my previous role. However, I took that as an opportunity to take a break and spend some quality time with my family. It was a much-needed reset after a busy period of work and to be honest the thing that I needed. 
          I was feeling that I had become complacent in my previous role and needed to step back and reassess my journey as a developer. Being a senior and in the industry for 15 or so years, I needed to map out what was next. 
          Eventually I found a new role that I am really excited about and it has been a great fit for me.
          Not only that but managed to level up to Lead Front End Developer at Animo Studios where I get to work with a fantastic team. We are currently working on some exciting projects that I can't wait to share more about in the future.
        </p>
        <br />
        <h2>Right now I'm keen on?</h2>
        <br />
        <p>
          After delving into the world of 3D printing which felt like a rabbit hole, I finally bit the bullet and purchased a Bambu Lab A1. 
        </p>
        <br />
        <p>On top of that I have been dedicating more time to setting my home server and playing around with various home automation projects with <Link to="https://www.home-assistant.io/" target="_blank">Home Assistant</Link>.</p>
        <br />
        <h2>What am I'm learning?</h2>
        <p>
          I've been recently getting into game development and started to play around and learn the <Link to="https://godotengine.org/" target="_blank">Godot engine</Link>. I have yet to build anything substantial but it has been fun experimenting and I aim to get something small built this year.
        </p>
        <br />
        <p>Also starting to get my hands dirty with <Link to="https://www.rust-lang.org/" target="_blank">Rust</Link>.</p>
        <br />
        <h2>What am I'm playing?</h2>
        <p>Currently playing with my wife after the little one has gone to bed: <Link to="https://metaphor.atlus.com/" target="_blank">Metaphor Re:Fantazio</Link></p>
        <br />
        <Link to="/">&lt;&lt; Back</Link>
        </Content>
          <Image
            className="whats_happening"
            alt="Bill Lumberg"
            fluid={props.data.file.childImageSharp.fluid}
          />
      </Container>
    </MainLayout>
  );
}
export default IndexPage

export const query = graphql`
  query {
    file(relativePath: { eq: "lumberg.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
  }
`;

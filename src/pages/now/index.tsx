import React from "react";

import MainLayout from "../../layouts/main";
import { Heading, Image, Container, Content } from "./now.styles";
import { graphql, Link } from "gatsby";
const IndexPage = (props) => {
  return (
    <MainLayout>
      <Container>
        <Heading>
          What's Happening?
        </Heading>
        <div>
          Inspired by <Link to="https://sive.rs/" target="_blank">Derek Sivers</Link> concept of <Link to="https://nownownow.com/about" target="_blank">/now</Link> pages
          
        </div>
        <div>Last Updated 10th Jan 2025</div>
        <Content>
        <Link to="/">&lt;&lt; Back</Link>
        <br />
        <br />
        <h2>What I'm doing now?</h2>
        <br />
        <p>
          Right now i'm focused on being a dad to an amazing little 3 year old. I also work at <Link to="https://www.skedulo.com/" target="_blank">Skedulo</Link> as a Senior Front End Developer, but now I'm on the lookout for my next challenge.
        </p>
        <br />
        <h2>Right now I'm keen on?</h2>
        <br />
        <p>
          I've been delving recently into the world of 3D printing. Binge watching <Link to="https://www.youtube.com/@thenextlayer" target="_blank">The Next Layer</Link> and I have yet to obtain a printer but I'm excited to get started so I start to tinker and adapt some ideas I have for around the house. Specifically ideas from <Link to="https://makeityourself.org/" target="_blank">Make It Yourself</Link> a book created by <Link to="https://www.youtube.com/@NODEtv" target="_blank">N-O-D-E</Link>.
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

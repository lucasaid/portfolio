import React from "react";

import MainLayout from "../../layouts/main";
import { Heading, Image, Container, Content } from "./now.styles";
import { graphql, Link } from "gatsby";

interface NowPageData {
  data: {
    file: {
      childImageSharp: {
        fluid: any
      }
    }
  }
}

const IndexPage = ({ data }: NowPageData) => {
  return (
    <MainLayout>
      <Container>
        <Heading>
          What&rsquo;s Happening?
        </Heading>
        <div>
          Inspired by <a href="https://sive.rs/" target="_blank" rel="noopener noreferrer">Derek Sivers</a> concept of <a href="https://nownownow.com/about" target="_blank" rel="noopener noreferrer">/now</a> pages
        </div>
        <div>Last Updated 18th September 2025</div>
        <Content>
        <Link to="/">&lt;&lt; Back</Link>
        <br />
        <br />
        <h2>What I&rsquo;m doing now?</h2>
        <br />
        <p>
          Still cruising along at Animo Studios and loving every minute of it. Honestly it has felt like I have landed my dream job. Its a place that allows me to be myself and flex my creative muscles.
          <br />
          <br />This has been my first experience for a proper launch, sure I have launched sites before but this has been something where launching becomes a lot more visible to the world.
        </p>
        <br />
        <h2>Right now I&rsquo;m keen on?</h2>
        <br />
        <p>
          Right now work has been quite the focus at the moment, although I did have a quick stint into looking how I could create my own fit-bit watch.
        </p>
        <br />
        <h2>What am I&rsquo;m learning?</h2>
        <p>
          I have been working on learning playwright so we can integrate e2e tests at work. So far it&rsquo;s been a super satisfying experience. Playwright has allowed us to increase our confidence of deploying a stable product.
        </p>
        <br />
        <h2>What am I&rsquo;m playing?</h2>
        <p>Currently playing with my wife after the little one has gone to bed: <a href="https://baldursgate3.game/" target="_blank" rel="noopener noreferrer">Baldur&rsquo;s Gate 3</a></p>
        <br />
        <Link to="/">&lt;&lt; Back</Link>
        </Content>
          <Image
            className="whats_happening"
            alt="Bill Lumberg"
            fluid={data.file.childImageSharp.fluid}
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

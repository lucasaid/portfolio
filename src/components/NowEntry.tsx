import React from "react";
import { Link } from "gatsby";

import MainLayout from "../layouts/main";
import { Heading, Image, Container, Content } from "../pages/now/now.styles";

interface NowEntryProps {
  title: string;
  backTo?: string;
  fluid?: any;
}

const NowEntry = ({ title, backTo = "/now", fluid, children }: React.PropsWithChildren<NowEntryProps>) => (
  <MainLayout>
    <Container>
      <Heading>{title}</Heading>
      <div>
        Inspired by <a href="https://sive.rs/" target="_blank" rel="noopener noreferrer">Derek Sivers</a> concept of{" "}
        <a href="https://nownownow.com/about" target="_blank" rel="noopener noreferrer">/now</a> pages
      </div>
      <Content>
        <Link to={backTo}>&lt;&lt; Back</Link>
        <br />
        <br />
        {children}
        <br />
        <Link to={backTo}>&lt;&lt; Back</Link>
      </Content>
      {fluid && (
        <Image className="whats_happening" alt="Bill Lumberg" fluid={fluid} />
      )}
    </Container>
  </MainLayout>
);

export default NowEntry;

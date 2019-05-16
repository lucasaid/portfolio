import { TransitionPortal } from "gatsby-plugin-transition-link";
import { Power1, TimelineMax } from "gsap";
import React from "react";
import Helmet from "react-helmet";

import CanvasBg from "../components/CanvasBg";
import "../stylesheets/all.scss";

export const AnimationContext = React.createContext(
  ({ length }, direction) => false
);
export class MainLayout extends React.Component {
  layoutContents: any;
  transitionCover: any;
  constructor(props) {
    super(props);
    this.layoutContents = React.createRef();
    this.transitionCover = React.createRef();
  }
  verticalAnimation = ({ length }, direction) => {
    const directionTo = direction === "left" ? "-100%" : "100%";
    const directionFrom = direction === "left" ? "100%" : "-100%";

    // convert ms to s for gsap
    const seconds = length;

    return new TimelineMax()
      .set(this.transitionCover, { x: directionFrom })
      .to(this.transitionCover, seconds / 2, {
        x: "0%",
        ease: Power1.easeInOut
      })
      .set(this.layoutContents, { opacity: 0 })
      .to(this.transitionCover, seconds / 2, {
        x: directionTo,
        ease: Power1.easeIn
      });
  };
  render() {
    return (
      <AnimationContext.Provider value={this.verticalAnimation}>
        <Helmet>
          <html lang="en" />
          <meta charSet="utf-8" />
          <meta
            name="description"
            content="Chris Lucas - Frontend Web Developer. Melbourne, Australia"
          />
          <title>Chris Lucas</title>
          <link rel="canonical" href="https://chriscreat.es" />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon-16x16.png"
          />
          <meta name="msapplication-TileColor" content="#65c9ff" />
          <meta name="theme-color" content="#ffffff" />
        </Helmet>
        <div ref={n => (this.layoutContents = n)}>
          <main>{this.props.children}</main>
        </div>
        <CanvasBg />
        <TransitionPortal>
          <section
            role="status"
            ref={n => (this.transitionCover = n)}
            style={{
              position: "fixed",
              background: "#22231d",
              top: 0,
              left: 0,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              color: "#FFFFFF",
              width: "100vw",
              height: "100vh",
              transform: "translateX(100%)"
            }}
          />
        </TransitionPortal>
      </AnimationContext.Provider>
    );
  }
}

export default MainLayout;

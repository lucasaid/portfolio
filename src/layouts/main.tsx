import React from "react";
import Helmet from "react-helmet";

import CanvasBg from "../components/CanvasBg";
import "../stylesheets/all.scss";

const MainLayout = (props) => {
  return (
    <div className="scanlines">
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
      <div>
        <main>{props.children}</main>
      </div>
      <CanvasBg />
      </div>
  )
}

export default MainLayout;

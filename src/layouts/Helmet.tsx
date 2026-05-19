import React from "react";
import ReactHelmet from "react-helmet";

interface HelmetProps {
  title?: string;
  description?: string;
}

const Helmet = (props: HelmetProps) => {
  return (
      <ReactHelmet>
        <html lang="en" />
        <meta charSet="utf-8" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Quicksand:wght@400;700&family=Roboto+Condensed:wght@400;700&display=swap" />
        <meta
          name="description"
          content={props.description || "Chris Lucas - Frontend Web Developer. Melbourne, Australia"}
        />
        <title>{props.title || "Chris Lucas"}</title>
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
      </ReactHelmet>
  )
}

export default Helmet;

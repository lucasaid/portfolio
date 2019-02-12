import "prismjs/themes/prism-tomorrow.css";
import React from "react";
import Helmet from "react-helmet";

import CanvasBg from "../components/CanvasBg";
import "../stylesheets/all.scss";

const MainLayout = ({ children }) => {
  return (
    <div>
      <Helmet>
        <html lang="en" />
        <meta charSet="utf-8" />
        <meta
          name="description"
          content="Chris Lucas - Frontend Web Developer. Melbourne, Australia"
        />
        <title>𝖈𝖍𝖗𝖎𝖘𝖈𝖗𝖊𝖆𝖙.𝖊𝖘</title>
        <link rel="canonical" href="https://chriscreat.es" />
      </Helmet>
      <div>{children}</div>
      <CanvasBg />
    </div>
  );
};

export default MainLayout

import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";

import CanvasBg from "../components/CanvasBg";
import "../stylesheets/all.scss";
import "prismjs/themes/prism-tomorrow.css";

const TemplateWrapper = ({ children }) => {
  return (
    <div>
      <Helmet title="𝖈𝖍𝖗𝖎𝖘𝖈𝖗𝖊𝖆𝖙.𝖊𝖘" />
      <div>{children()}</div>
      <CanvasBg />
    </div>
  );
};

TemplateWrapper.propTypes = {
  children: PropTypes.func
};

export default TemplateWrapper;

import React from "react";
import Helmet from "./Helmet";

import CanvasBg from "../components/CanvasBg";
import "../stylesheets/all.scss";

const MainLayout = (props) => {
  return (
    <div>
      <Helmet />
      <div>
        <main>{props.children}</main>
      </div>
      <CanvasBg />
      </div>
  )
}

export default MainLayout;

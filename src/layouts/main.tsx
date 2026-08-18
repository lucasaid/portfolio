import React from "react";
import Helmet from "./Helmet";

import CanvasBg from "../components/CanvasBg";
import "../stylesheets/all.scss";

const MainLayout = ({ children }: React.PropsWithChildren) => {
  return (
    <div>
      <Helmet />
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <main id="main-content">{children}</main>
      <CanvasBg />
    </div>
  )
}

export default MainLayout;

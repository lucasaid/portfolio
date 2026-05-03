import React from "react";
import Helmet from "./Helmet";

import CanvasBg from "../components/CanvasBg";
import "../stylesheets/all.scss";

const MainLayout = ({ children }: React.PropsWithChildren) => {
  return (
    <div>
      <Helmet />
      <main>{children}</main>
      <CanvasBg />
    </div>
  )
}

export default MainLayout;

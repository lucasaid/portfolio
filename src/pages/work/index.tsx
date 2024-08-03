import React from "react";

import MainLayout from "../../layouts/main";
import { Heading } from "./work.styles";
const IndexPage = () => {
  return (
    <MainLayout>
      <div className={`container`}>
        <Heading>
          My Work
        </Heading>
      </div>
    </MainLayout>
  );
}
export default IndexPage

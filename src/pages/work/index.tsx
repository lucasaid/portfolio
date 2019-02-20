import React from "react";

import MainLayout from "../../layouts/main";
import styles from "./work.module.scss";
export default class IndexPage extends React.Component {
  render() {
    return (
      <MainLayout>
        <div className={`container ${styles.heading}`}>
          <h2>My Work</h2>
        </div>
      </MainLayout>
    );
  }
}

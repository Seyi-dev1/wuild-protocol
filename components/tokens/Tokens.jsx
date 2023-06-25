import styles from "./tokens.module.scss";

import React from "react";
import Carousel1 from "./carousel1/Carousel1";

const Tokens = () => {
  return (
    <div className={styles.tokenSummary}>
      <Carousel1 />
    </div>
  );
};

export default Tokens;

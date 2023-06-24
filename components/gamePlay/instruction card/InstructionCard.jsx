import styles from "./instructionCard.module.scss";

import React from "react";

const InstructionCard = ({ id, heading, description, button }) => {
  return (
    <div className={styles.instructionCard}>
      <div className={styles.header}>
        <div className={styles.rotate}></div>
        <div className={styles.id}>
          <p>{id}</p>
        </div>
        <div className={styles.heading}>
          <h3>{heading}</h3>
        </div>
      </div>
      <div className={styles.description}>
        <p>{description}</p>
      </div>
      <div className={styles.button}>
        <h4>{button}</h4>
      </div>
    </div>
  );
};

export default InstructionCard;

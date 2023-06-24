import styles from "./card.module.scss";
import { spaceGrotesk } from "@/app/layout";
import { orbitron } from "@/app/layout";
import React from "react";

const QuestCard = ({ title, type, description, rewarrd1, reward2 }) => {
  return (
    <div className={` ${styles.questCard}`}>
      <div className={styles.title}>
        <p className={spaceGrotesk.className}>
          {title} <span className={styles.type}>{type}</span>
        </p>
      </div>
      <div className={styles.description}>
        <h3 className={orbitron.className}>{description}</h3>
      </div>
      <div className={styles.rewards}>
        <div className={styles.heading}>
          <p className={orbitron.className}>Rewards</p>
        </div>
        <div className={styles.rewardItems}>
          <div className={styles.rewardItem}>
            <div className={styles.image}>
              <span className={spaceGrotesk.className}>xp</span>
            </div>
            <span className={styles.text}>EXP Points:</span>
            <span className={styles.number}>{rewarrd1}</span>
          </div>
          <div className={styles.rewardItem}>
            <div className={styles.image}>
              <span>xp</span>
            </div>
            <span className={styles.text}>$SLP Token:</span>
            <span className={styles.number}>{reward2}</span>
          </div>
        </div>
      </div>
      <div className={styles.button}>
        <button className={orbitron.className}>START QUEST</button>
      </div>
    </div>
  );
};

export default QuestCard;

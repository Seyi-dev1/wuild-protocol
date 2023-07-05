import styles from "./page2.module.scss";
import Home from "../components/home/Home";
import GamePlay from "@/components/gamePlay/GamePlay";
import Tokens from "@/components/tokens/Tokens";
import RoadMap from "@/components/road map/RoadMap";
import Community from "@/components/community/Community";
import Footer from "@/components/footer/Footer";
import React from "react";

const Page2 = () => {
  return (
    <div className={styles.page2}>
      <div className={styles.home}>
        <Home />
      </div>
      <div className={styles.gamePlay}>
        <GamePlay />
      </div>
      <div className={styles.tokens}>
        <Tokens />
      </div>
      <div className={styles.roadMap}>
        <RoadMap />
      </div>
      <div className={styles.community}>
        <Community />
      </div>
      <div className={styles.footer}>
        <Footer />
      </div>
    </div>
  );
};

export default Page2;

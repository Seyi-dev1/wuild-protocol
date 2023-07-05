"use client";
import styles from "./page2.module.scss";
import Home from "../components/home/Home";
import GamePlay from "@/components/gamePlay/GamePlay";
import Tokens from "@/components/tokens/Tokens";
import RoadMap from "@/components/road map/RoadMap";
import Community from "@/components/community/Community";
import Footer from "@/components/footer/Footer";
import Modal from "@/components/modal/Modal";
import { useSelector, useDispatch } from "react-redux";
import { selectModal } from "./redux/modal2/modalSelectors";
import React from "react";

const Page2 = () => {
  const modalVisibility = useSelector((state) => selectModal(state));
  const modal = modalVisibility.isVisible;
  return (
    <div className={styles.page2}>
      {/* {modal && (
        <div className={styles.modal}>
          <Modal />
        </div>
      )} */}
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

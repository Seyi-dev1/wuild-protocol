"use client";
import styles from "./gamePlay.module.scss";
import { FaAngleRight } from "react-icons/fa";
import { orbitron } from "@/app/layout";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import React, { useEffect, useRef } from "react";

const GamePlay = () => {
  const buttonRef = useRef(null);
  const triggerElement = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const buttonAnim = gsap.timeline({
      scrollTrigger: {
        trigger: triggerElement.current,
        start: "top 70%",
        // end: "bottom top",
        scrub: 1,
      },
    });

    // button animation
    buttonAnim.from(buttonRef.current, {
      y: 100,
      ease: "power2",
    });
  });

  return (
    <div className={styles.gamePlay}>
      <div className={styles.heading}>
        <h1 ref={triggerElement}>Participate in Quests and Adventures</h1>
      </div>
      <div className={styles.text}>
        <p>
          From DeFi to NFTs, it's never been easier to learn how to use products
          on the market and make money while doing it. Complete quests to earn
          experience points, skill points and guild coin tokens.
        </p>
      </div>
      <div className={styles.button} ref={buttonRef}>
        <div className={styles.icons}>
          <FaAngleRight className={styles.icon} />
          <FaAngleRight className={`${styles.icon} ${styles.move}`} />
        </div>
        <div className={styles.btnText}>
          <h3 className={orbitron.className}>Explore Quests</h3>
        </div>
      </div>
    </div>
  );
};

export default GamePlay;

"use client";
import styles from "./home.module.scss";
import { FiMail } from "react-icons/fi";
import { TfiAngleRight } from "react-icons/tfi";
import coin1 from "../../app/assets/enjin.png";
import coin2 from "../../app/assets/stellar.png";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Elastic } from "gsap";

const Home = () => {
  const triggerElement = useRef(null);
  const target = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const homeAnim = gsap.timeline(triggerElement.current, {
      delay: 0.5,
    });

    // to stop flickering on page load
    gsap.to(triggerElement.current, {
      duration: 0,
      visibility: "visible",
    });

    // bounce effect of home section
    homeAnim.from(triggerElement.current, {
      y: 200,
      ease: "elastic",
      opacity: 0,
      duration: 2,
      scrub: 0.5,
    });

    const coinAnim = gsap.timeline({
      scrollTrigger: {
        trigger: triggerElement.current,
        start: "top 50%",
        end: "bottom top",
        scrub: 1,
      },
    });

    // coin animation
    coinAnim.to(target.current, {
      y: 300,
      ease: "power2",
    });
  });

  return (
    <div className={styles.home} ref={triggerElement}>
      <div ref={target}>
        <Image src={coin2} alt="coin" className={styles.coin1} />
      </div>

      <Image src={coin1} alt="coin" className={styles.coin2} />
      <div>
        <div className={styles.heading}>
          <h1>Earn crypto by learning crypto skills</h1>
        </div>
        <div className={styles.text}>
          <p>
            Contribute to earn platform where anyone can earn crypto by learning
            how to use blockchain products and completing quests.
          </p>
        </div>
        <div className={styles.box}>
          <div className={styles.container}>
            <FiMail className={styles.icon} />
            <input type="text" placeholder="Sign up for Beta Testing" />
            <button>Submit</button>
          </div>
        </div>
        <div className={styles.or}>
          <p className={styles.bold}>Or watch demo video</p>
          <TfiAngleRight className={styles.icon} />
        </div>
      </div>
    </div>
  );
};

export default Home;

"use client";
import styles from "./carousel.module.scss";
import React from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import { useEffect } from "react";

const Carousel = () => {
  const triggerRef = useRef(null);
  const sectionsRef = useRef(null);
  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    const pin = gsap.fromTo(
      sectionsRef.current,
      {
        translateX: 0,
      },
      {
        translateX: "-200vw",
        ease: "none",
        duration: 1,
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top 40%",
          scrub: 0.6,
          pin: true,
        },
      }
    );
  });
  return (
    <div className={styles.carousel} ref={triggerRef}>
      <div>
        <div className={styles.carouselSections} ref={sectionsRef}>
          <div className={styles.carouselSection}>
            <h3>Section1</h3>
          </div>
          <div className={styles.carouselSection}>
            <h3>Section2</h3>
          </div>
          <div className={styles.carouselSection}>
            <h3>Section3</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;

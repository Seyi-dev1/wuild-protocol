"use client";
import { useRef } from "react";
import data from "./data";
import styles from "./roadMap.module.scss";
import { spaceGrotesk } from "@/app/layout";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React from "react";
import { useEffect } from "react";

const RoadMap = () => {
  const trigger = useRef(null);
  const listSection = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: trigger.current,
        start: "top 30%",
        end: "bottom top",
        scrub: 4,
      },
    });
    tl.from(listSection.current, {
      y: 100,
      ease: "power2",
    }).to(
      listSection.current,
      {
        transform: "translateX(-46rem)",
        duration: 2,
        ease: "power2",
      },
      0.2
    );
  });
  return (
    <div className={styles.roadMap}>
      <div className={styles.heading}>
        <h1 ref={trigger}>Roadmap</h1>
      </div>
      <div className={styles.description}>
        <p>
          The path to adoption and improving the utility and features of the
          protocol for players and guilds
        </p>
      </div>
      <div className={styles.cards} ref={listSection}>
        {data.map((item) => {
          return (
            <div className={styles.card} key={item.id}>
              <div className={styles.rotate}>
                <div className={styles.plate}></div>
                <div className={styles.number}>{item.id}</div>
              </div>
              <div className={styles.heading}>
                <h2 className={spaceGrotesk.className}>{item.heading}</h2>
              </div>
              <div className={styles.list}>
                <ul className={spaceGrotesk.className}>
                  {item.listItems.map((listItem) => {
                    return <li key={listItem.id}>{listItem.listItem}</li>;
                  })}
                </ul>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RoadMap;

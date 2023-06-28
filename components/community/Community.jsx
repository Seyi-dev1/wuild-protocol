"use client";
import styles from "./community.module.scss";
import { FaTwitter } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaRedditAlien } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { AiFillYoutube } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useRef } from "react";
import { useEffect } from "react";

const Community = () => {
  const twitter = useRef(null);
  const discord = useRef(null);
  const linkedIn = useRef(null);
  const reddit = useRef(null);
  const facebook = useRef(null);
  const instagram = useRef(null);
  const youtube = useRef(null);
  const trigger = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: trigger.current,
        start: "top 75%",
        scrub: 0.9,
      },
    });
    tl.from([twitter.current], {
      x: -90,
      duration: 1,
      ease: "power2",
    })
      .from(
        [instagram.current],
        {
          x: 80,
          duration: 1,
          ease: "power2",
        },
        0
      )
      .from(
        [youtube.current, reddit.current, discord.current],
        {
          y: 100,
          rotate: "380deg",
        },
        0
      );
  });
  return (
    <div className={styles.community} ref={trigger}>
      <div className={styles.heading}>
        <h2>Community</h2>
      </div>
      <div className={styles.description}>
        <p>
          Join a fast-growing community of players and guilds connected all over
          the multiverse, building the new era of the metaverse.
        </p>
      </div>
      <div className={styles.socialLinks} ref={twitter}>
        <div className={styles.icon}>
          <FaTwitter />
        </div>
        <div className={styles.icon} ref={discord}>
          <FaDiscord />
        </div>
        <div className={styles.icon} ref={linkedIn}>
          <FaLinkedinIn />
        </div>
        <div className={styles.icon} ref={reddit}>
          <FaRedditAlien />
        </div>
        <div className={styles.icon} ref={facebook}>
          <FaFacebookSquare />
        </div>
        <div className={styles.icon} ref={youtube}>
          <AiFillYoutube />
        </div>
        <div className={styles.icon} ref={instagram}>
          <AiFillInstagram />
        </div>
      </div>
    </div>
  );
};

export default Community;

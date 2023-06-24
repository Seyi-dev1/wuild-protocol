"use client";
import Link from "next/link";
import styles from "./navbar.module.scss";
import { monoton } from "@/app/layout";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    const home = document.querySelector("#home");
    const gamePlay = document.querySelector("#gamePlay");
    const tokens = document.querySelector("#tokens");
    const roadMap = document.querySelector("#roadMap");
    const community = document.querySelector("#community");
    const whitePaper = document.querySelector("#whitePaper");
    const links = document.querySelectorAll(`.${styles.link}`);
    const linksArray = Array.from(links);

    const removeActiveClass = () => {
      linksArray.map((link) => {
        link.classList.remove(`${styles.active}`);
      });
    };
    const handleScroll = () => {
      setScroll(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll, { passive: false });
    if (scroll <= 250) {
      removeActiveClass();
      home.classList.add(`${styles.active}`);
    } else if (scroll > 250) {
      removeActiveClass();
      gamePlay.classList.add(`${styles.active}`);
    }
  }, [scroll]);

  return (
    <div className={styles.navbar}>
      <div className={styles.logo}>
        <p className={monoton.className}>GUILD PROTOCOL</p>
      </div>
      <div className={styles.links} id="links">
        <Link href={"/"} id="home" className={styles.link}>
          Home
        </Link>
        <Link href={"/"} id="gamePlay" className={styles.link}>
          Gameplay
        </Link>
        <Link href={"/"} id="tokens" className={styles.link}>
          Tokens
        </Link>
        <Link href={"/"} id="roadMap" className={styles.link}>
          Roadmap
        </Link>
        <Link href={"/"} id="community" className={styles.link}>
          Community
        </Link>
        <Link href={"/"} id="whitePaper" className={styles.link}>
          Whitepaper
        </Link>
      </div>
      <div className={styles.buttons}>
        <button>Join Discord</button>
      </div>
    </div>
  );
};

export default Navbar;

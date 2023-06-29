"use client";
import styles from "./footer.module.scss";
import React from "react";
import logo from "../../app/assets/favicon_r8wgli (2).svg";
import Image from "next/image";
import { spaceGrotesk } from "@/app/layout";
import { FaTwitter } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaRedditAlien } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { AiFillYoutube } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.footerLinks}>
        <div className={styles.image}>
          <Image src={logo} alt="logo" />
        </div>
        <div className={styles.linksTable}>
          <div className={styles.heading}>
            <h3>Tokens</h3>
          </div>
          <div className={styles.links}>
            <p>Guild Gems</p>
            <p>Guild Coin</p>
            <p>Guild Dust</p>
          </div>
        </div>
        <div className={styles.linksTable}>
          <div className={styles.heading}>
            <h3>Resources</h3>
          </div>
          <div className={styles.links}>
            <p>Whitepaper</p>
            <p>Blog</p>
            <p>FAQs</p>
          </div>
        </div>
        <div className={styles.linksTable}>
          <div className={styles.heading}>
            <h3>Protocol</h3>
          </div>
          <div className={styles.links}>
            <p>Quests</p>
            <p>Msrketplace</p>
            <p>Guild Card</p>
          </div>
        </div>
        <div className={styles.contact}>
          <div className={styles.heading}>
            <h3>Stay up to date</h3>
          </div>
          <div className={styles.description}>
            <p>Get early access to our news & releases</p>
          </div>
          <div className={styles.message}>
            <div className={styles.inputField}>
              <input type="text" placeholder="Enter your Email Address" />
            </div>
            <div className={styles.btn}>
              <button className={spaceGrotesk.className}>Stay Updated</button>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.footerCredits}>
        <div className={styles.credits}>
          <p>©Seyi.dev 2023. All rights reserved</p>
        </div>
        <div className={styles.socials}>
          <div className={styles.icon}>
            <FaTwitter />
          </div>
          <div className={styles.icon}>
            <FaDiscord />
          </div>
          <div className={styles.icon}>
            <FaLinkedinIn />
          </div>
          <div className={styles.icon}>
            <FaRedditAlien />
          </div>
          <div className={styles.icon}>
            <FaFacebookSquare />
          </div>
          <div className={styles.icon}>
            <AiFillYoutube />
          </div>
          <div className={styles.icon}>
            <AiFillInstagram />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

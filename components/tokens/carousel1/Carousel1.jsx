"use client";
import styles from "./carousel1.module.scss";
import React from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import { useEffect } from "react";
import bullet from "../../../app/assets/icons8-bullet-30.png";
import lightning from "../../../app/assets/icons8-lightning-30.png";
import explode from "../../../app/assets/icons8-bang-30.png";
import Image from "next/image";
import { spaceGrotesk } from "@/app/layout";
import coin from "../../../app/assets/guild-coin_iagyvp.webp";

const Carousel1 = () => {
  const sections = useRef(null);
  const section1 = useRef(null);
  const section2 = useRef(null);
  const section3 = useRef(null);
  const indicator1 = useRef(null);
  const indicator2 = useRef(null);
  const indicator3 = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const anim1 = gsap.timeline({
      scrollTrigger: {
        trigger: sections.current,
        start: "top 15%",
        scrub: 0.1,
        pin: true,
      },
    });

    anim1
      .to([section1.current, indicator1.current], {
        display: "none",
      })
      .to([section2.current, indicator2.current], {
        display: "grid",
      })
      .to([section2.current, indicator2.current], {
        display: "none",
      })
      .to([section3.current, indicator3.current], {
        display: "grid",
      });
  });

  return (
    <div className={styles.carousel1} ref={sections}>
      <div className={styles.carouselContent}>
        <div className={styles.heading}>
          <h1>Guild Token Summary</h1>
        </div>
        <div className={styles.description}>
          <p>
            Guild Gem (GDG), Guild Coin (GDC) and Guild Dust (GDD) are designed
            with the following principles in mind:
          </p>
        </div>
        <div className={styles.sections}>
          <div className={styles.indicators}>
            <div className={styles.bar}>
              <div
                className={`${styles.after} ${styles.after1}`}
                ref={indicator1}
              ></div>
            </div>
            <div className={styles.bar}>
              <div
                className={`${styles.after} ${styles.after2}`}
                ref={indicator2}
              ></div>
            </div>
            <div className={styles.bar}>
              <div
                className={`${styles.after} ${styles.after3}`}
                ref={indicator3}
              ></div>
            </div>
          </div>
          <div
            className={`${styles.section} ${styles.section1}`}
            ref={section1}
          >
            <div className={styles.wordings}>
              <div className={styles.headerGroup}>
                <div className={styles.header}>
                  <div className={styles.icon}>
                    <Image src={bullet} alt="bullet" />
                  </div>
                  <div className={styles.description}>
                    <p className={spaceGrotesk.className}>
                      $GDC can be earned by participating in quests, daily
                      challenges.
                    </p>
                  </div>
                </div>
                <div className={styles.topic}>
                  <h2>Guild Coins</h2>
                </div>
              </div>

              <div className={styles.footerGroup}>
                <div className={styles.descriptions}>
                  <p>
                    Guild Coin ($GDC) is the main in-game currency used in Guild
                    Protocol. GDC holders will be able to rent items and
                    upgrades in the shop, buy collectibles in the marketplace,
                    create clans, upgrade Avatars, purchase battelepass tickets
                    etc.
                  </p>
                </div>
                <div className={styles.button}>
                  <button className={spaceGrotesk.className}>
                    Coming Soon
                  </button>
                </div>
              </div>
            </div>
            <div className={styles.image}>
              <Image src={coin} />
            </div>
          </div>
          <div
            className={`${styles.section} ${styles.section2}`}
            ref={section2}
          >
            <div className={styles.wordings}>
              <div className={styles.headerGroup}>
                <div className={styles.header}>
                  <div className={styles.icon}>
                    <Image src={explode} alt="bang" />
                  </div>
                  <div className={styles.description}>
                    <p className={spaceGrotesk.className}>
                      $GDD can be earned by burning your $GDC or NFT items.
                    </p>
                  </div>
                </div>
                <div className={styles.topic}>
                  <h2>Guild Dust</h2>
                </div>
              </div>

              <div className={styles.footerGroup}>
                <div className={styles.descriptions}>
                  <p>
                    Guild Dust ($GDD) extends the usefulness of items beyond the
                    gameplay itself and decrease the friction generated by
                    Loots. Dust holders will be able to craft items, purchase
                    skill gems and avatar skins. Dusts are not tradeable.
                  </p>
                </div>
                <div className={styles.button}>
                  <button className={spaceGrotesk.className}>
                    Coming Soon
                  </button>
                </div>
              </div>
            </div>
            <div className={styles.image}>
              <Image src={coin} />
            </div>
          </div>
          <div
            className={`${styles.section} ${styles.section3}`}
            ref={section3}
          >
            <div className={styles.wordings}>
              <div className={styles.headerGroup}>
                <div className={styles.header}>
                  <div className={styles.icon}>
                    <Image src={lightning} alt="bolt" />
                  </div>
                  <div className={styles.description}>
                    <p className={spaceGrotesk.className}>
                      $GDG gives specialized governance and staking power.
                    </p>
                  </div>
                </div>
                <div className={styles.topic}>
                  <h2>Guild Gems</h2>
                </div>
              </div>

              <div className={styles.footerGroup}>
                <div className={styles.descriptions}>
                  <p>
                    Guild Gems(GDG) are the governance token for the Guild
                    Protocol. Guild holders will be able to claim rewards if
                    they stake their tokens, play tournaments, and participate
                    in key governance.
                  </p>
                </div>
                <div className={styles.button}>
                  <button className={spaceGrotesk.className}>
                    Coming Soon
                  </button>
                </div>
              </div>
            </div>
            <div className={styles.image}>
              <Image src={coin} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel1;

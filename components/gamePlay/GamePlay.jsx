"use client";
import styles from "./gamePlay.module.scss";
import { FaAngleRight } from "react-icons/fa";
import { orbitron } from "@/app/layout";
import { spaceGrotesk } from "@/app/layout";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import soldier from "../../app/assets/soldier2-removebg-preview.png";
import { Elastic } from "gsap";
import icon from "../../app/assets/icons8-upload-35.png";
import airforce from "../../app/assets/icons8-us-air-force-50.png";
import React, { useEffect, useRef, useState } from "react";
import data from "./quest card/data";
import QuestCard from "./quest card/Card";
import Image from "next/image";
import CountUp from "react-countup";
import data2 from "./skill card/data";
import SkillCard from "./skill card/SkillCard";
import data3 from "./instruction card/data";
import InstructionCard from "./instruction card/InstructionCard";
import Carousel from "./carousel/Carousel";
import Carousel1 from "../tokens/carousel1/Carousel1";

const GamePlay = () => {
  const buttonRef = useRef(null);
  const triggerElement = useRef(null);
  const questsSection = useRef(null);
  const questCard1 = useRef(null);
  const questCard2 = useRef(null);
  const soldierRef = useRef(null);
  const progressRef = useRef(null);
  const wingRef = useRef(null);
  const skillListRef = useRef(null);
  const skillTextRef = useRef(null);
  const exploreBtnRef = useRef(null);
  const headingRef = useRef(null);
  const instructionCard1 = useRef(null);
  const instructionCard2 = useRef(null);
  const instructionCard3 = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const anim = gsap.timeline({
      scrollTrigger: {
        trigger: triggerElement.current,
        start: "top 70%",
        // end: "bottom top",
        scrub: 1,
      },
    });

    const anim2 = gsap.timeline({
      scrollTrigger: {
        trigger: triggerElement.current,
        start: "top 20%",
        // end: "bottom top",
        scrub: 2,
      },
    });

    const anim3 = gsap.timeline({
      scrollTrigger: {
        trigger: soldierRef.current,
        start: "top 5%",
        onEnter: () => anim3.play(),
        onLeaveBack: () => anim3.reverse(),
      },
    });

    const anim4 = gsap.timeline({
      scrollTrigger: {
        trigger: soldierRef.current,
        start: "top 7%",
        onEnter: () => anim4.play(),
        onLeaveBack: () => anim4.reverse(),
      },
    });

    const anim5 = gsap.timeline({
      scrollTrigger: {
        trigger: skillListRef.current,
        start: "top 65%",
        scrub: 1,
      },
    });

    const anim6 = gsap.timeline({
      scrollTrigger: {
        trigger: exploreBtnRef.current,
        start: "top 65%",
        // end: "bottom top",
        scrub: 1,
      },
    });

    // button animation
    anim.from(buttonRef.current, {
      y: 50,
      ease: "power2",
    });

    // card animation
    anim2
      .to([questCard1.current, questCard2.current], {
        rotate: "0deg",
        ease: "power1",
        duration: 2,
      })
      .from(
        questsSection.current,
        {
          y: 100,
          ease: "power1",
          duration: 2,
        },
        0.1
      );

    // airforce wings animation
    anim4.to(wingRef.current, {
      scale: 0.7,
      ease: Elastic.easeOut,
      duration: 3,
    });

    // progress animation
    anim3.to(progressRef.current, {
      width: "70%",
      // ease: "elastic",
    });

    // skills Text animation
    anim5.from(skillTextRef.current, {
      y: 120,
      ease: "power2",
      duration: 2,
    });

    // protocol heading animation
    anim6
      .from(headingRef.current, {
        y: 150,
        duration: 2,
        ease: "power2",
      })

      // instruction cards animation
      .from(
        instructionCard1.current,
        {
          y: 150,
          x: 150,
          duration: 2,
          opacity: 0,
          ease: "power2",
        },
        0.3
      )
      .from(
        instructionCard2.current,
        {
          y: 150,
          x: 150,
          duration: 2,
          opacity: 0,
          ease: "power2",
        },
        1
      )
      .from(
        instructionCard3.current,
        {
          y: 150,
          x: 150,
          duration: 2,
          opacity: 0,
          ease: "power2",
        },
        1.5
      );
  }, []);

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
      <div className={styles.questCards} ref={questsSection}>
        {data.map((quest) => {
          return (
            <div
              className={styles.card}
              key={quest.id}
              ref={
                quest.id === 1 ? questCard1 : quest.id === 3 ? questCard2 : null
              }
            >
              <QuestCard
                key={quest.id}
                title={quest.title}
                type={quest.type}
                description={quest.description}
                rewarrd1={quest.reward1}
                reward2={quest.reward2}
              />
            </div>
          );
        })}
      </div>
      <div className={styles.guildCard}>
        <div className={styles.text}>
          <div className={styles.title}>
            <p className={spaceGrotesk.className}>On-Chain Resume:</p>
          </div>
          <div className={styles.heading}>
            <h1>Guild Card</h1>
          </div>
          <div className={styles.paragraph1}>
            <p>
              A guild card can be used as an on-chain resume and has a color
              corresponding to the rank and level. The guild card contains
              player rank, level, quest completed, skills unlocked and avatar.
            </p>
          </div>
          <div className={styles.paragraph2}>
            <p>
              There are hundred unique skills that players can acquire, which
              can be shared as a readable online resume to DAOs for contribution
              or potential employers.
            </p>
          </div>
          <div className={styles.button}>
            <button className={spaceGrotesk.className}>
              Create Guild Card
            </button>
          </div>
        </div>
        <div className={styles.image} ref={soldierRef}>
          <Image className={styles.icon} src={icon} alt="icon" />
          <div className={styles.picture}>
            <Image src={soldier} alt="avatar" />
          </div>
          <div className={styles.warBadge}>
            <div className={styles.wings}>
              <Image
                ref={wingRef}
                width="60"
                height="60"
                src={airforce}
                alt="us-air-force"
              />
              <div className={styles.words}>
                <h2>druids.eth</h2>
                <p>Burma class</p>
              </div>
            </div>
            <div className={styles.figure}>
              <div className={styles.space}></div>
              <div className={styles.num}>
                <h4>23</h4>
              </div>
            </div>
          </div>
          <div className={styles.level}>
            <h3 className={spaceGrotesk.className}>
              LEVEL 98: <span>Gundabad Class Hunter</span>
            </h3>
          </div>
          <div className={styles.xpCount}>
            <div className={styles.numbers}>
              <h4 className={`${spaceGrotesk.className}`}>
                <CountUp
                  className={styles.green}
                  start={0}
                  end={182}
                  duration={2}
                  enableScrollSpy={true}
                  useEasing={true}
                  suffix=",000"
                />
              </h4>
              <h4 className={spaceGrotesk.className}>
                <span> / 340000 XP</span>
              </h4>
            </div>
            <div className={styles.progress}>
              <div className={styles.progressContent}>
                <div className={styles.after} ref={progressRef}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.skills}>
        <div className={styles.skillList}>
          <div className={styles.headers}>
            <div className={styles.header}>
              <h3 ref={skillListRef}>SKILL LIST</h3>
            </div>
            <div className={styles.header}>
              <h3>SKILL POINTS: 43</h3>
            </div>
          </div>
          <div className={styles.skillCards}>
            {data2.map((card) => {
              return (
                <div className={styles.skillCard} key={card.id}>
                  <SkillCard
                    images={card.images}
                    title={card.title}
                    heading={card.heading}
                  />
                </div>
              );
            })}
          </div>
          <div className={styles.forgot}>
            <p>
              Users level up avatar stats using skill points earned from
              completing quests.
            </p>
          </div>
        </div>
        <div className={styles.text} ref={skillTextRef}>
          <div className={styles.title}>
            <p>Skill Based Battle:</p>
          </div>
          <div className={styles.heading}>
            <h1>Avatars</h1>
          </div>
          <div className={styles.description}>
            <p>
              Avatars are custom creatures created using player selfies or one
              of Guild's avatar preset, avatars can be battled, upgraded and
              customized with skins.
            </p>
          </div>
          <div className={styles.button}>
            <button ref={exploreBtnRef} className={spaceGrotesk.className}>
              Start Exploring
            </button>
          </div>
        </div>
      </div>
      <div className={styles.howItWorks}>
        <div className={styles.heading}>
          <h1 ref={headingRef}>How the Guild Protocol Works</h1>
        </div>
        <div className={styles.instructionCards}>
          {data3.map((card) => {
            return (
              <div
                className={styles.card}
                key={card.id}
                ref={
                  card.id === 1
                    ? instructionCard1
                    : card.id === 2
                    ? instructionCard2
                    : card.id === 3
                    ? instructionCard3
                    : null
                }
              >
                <InstructionCard
                  button={card.button}
                  heading={card.heading}
                  id={card.id}
                  description={card.description}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default GamePlay;

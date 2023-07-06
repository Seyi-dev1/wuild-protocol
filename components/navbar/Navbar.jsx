"use client";
import Link from "next/link";
import "./navbar.scss";
import { monoton } from "@/app/layout";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import logo from "../../app/assets/favicon_r8wgli (2).svg";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useSelector, useDispatch } from "react-redux";
import { changeAmount } from "@/app/redux/modal/scrollReducer";
import { selectScroll } from "@/app/redux/modal/scrollSelectors";
import { selectModal } from "@/app/redux/modal2/modalSelectors";
import { changeVisibility } from "@/app/redux/modal2/modalReducer";

let buttonToggle = () => {
  const button = document.getElementById("menu-button").classList,
    isopened = "is-opened";
  let isOpen = button.contains(isopened);
  if (isOpen) {
    button.remove(isopened);
  } else {
    button.add(isopened);
  }
};

const Navbar = ({ toggle }) => {
  const dispatch = useDispatch();
  const scrollAmount = useSelector((state) => selectScroll(state));
  const modalVisibility = useSelector((state) => selectModal(state));
  const modal = modalVisibility.isVisible;
  const scroll = scrollAmount.amount;

  const func = () => {
    dispatch(changeVisibility);
  };

  const trigger = useRef(null);
  const target = useRef(null);
  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    // function preventScroll(e) {
    //   e.preventDefault();
    //   e.stopPropagation();

    //   return false;
    // }

    // modal &&
    //   document
    //     .querySelector(".modal")
    //     .addEventListener("wheel", preventScroll, {
    //       passive: false,
    //     });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: trigger.current,
        start: "top top",
        scrub: 0.3,
      },
    });
    tl.to(target.current, {
      padding: "1rem 0rem",
      scale: 0.86,
      // ease: "power1",
    });

    const home = document.querySelector("#home");
    const gamePlay = document.querySelector("#gamePlay");
    const tokens = document.querySelector("#tokens");
    const roadMap = document.querySelector("#roadMap");
    const community = document.querySelector("#community");
    const whitePaper = document.querySelector("#whitePaper");
    const links = document.querySelectorAll(".link");
    const linksArray = Array.from(links);

    const removeActiveClass = () => {
      linksArray.map((link) => {
        link.classList.remove("active");
      });
    };
    const handleScroll = () => {
      dispatch(changeAmount(window.scrollY));
    };

    window.addEventListener("scroll", handleScroll, { passive: false });

    if (scroll <= 250) {
      removeActiveClass();
      home.classList.add("active");
    } else if (scroll > 250 && scroll < 2850) {
      removeActiveClass();
      gamePlay.classList.add("active");
    } else if (scroll > 2850 && scroll < 4000) {
      removeActiveClass();
      tokens.classList.add("active");
    } else if (scroll > 4000 && scroll < 4642) {
      removeActiveClass();
      roadMap.classList.add("active");
    } else if (scroll > 4642) {
      removeActiveClass();
      community.classList.add("active");
    }
  }, [scroll, dispatch]);

  return (
    <div className="navbar" ref={trigger}>
      <div className="navContent" ref={target}>
        <div className="logo">
          <Image src={logo} alt="logo" />
          <p className={monoton.className}>GUILD PROTOCOL</p>
        </div>
        <div className="links" id="links">
          <Link href={"/"} id="home" className="link">
            Home
          </Link>
          <Link href={"/"} id="gamePlay" className="link">
            Gameplay
          </Link>
          <Link href={"/"} id="tokens" className="link">
            Tokens
          </Link>
          <Link href={"/"} id="roadMap" className="link">
            Roadmap
          </Link>
          <Link href={"/"} id="community" className="link">
            Community
          </Link>
          <Link href={"/"} id="whitePaper" className="link">
            Whitepaper
          </Link>
        </div>
        <div className="buttons">
          <button className="buttin">Join Discord</button>
        </div>
        <div className="menu" onClick={toggle}>
          <div className="container">
            <button
              className="button is-text"
              id="menu-button"
              onClick={buttonToggle}
            >
              <div className="button-inner-wrapper">
                <span className="icon menu-icon"></span>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

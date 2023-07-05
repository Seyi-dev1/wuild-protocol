"use client";
import "./modal.scss";
import React, { useEffect } from "react";
import { orbitron } from "@/app/layout";
import { useSelector, useDispatch } from "react-redux";
import { changeAmount } from "@/app/redux/modal/scrollReducer";
import { selectScroll } from "@/app/redux/modal/scrollSelectors";
const Modal = () => {
  const scrollAmount = useSelector((state) => selectScroll(state));
  const scroll = scrollAmount.amount;

  useEffect(() => {
    const modalHome = document.querySelector("#modalHome");
    const modalGamePlay = document.querySelector("#modalGamePlay");
    const modalTokens = document.querySelector("#modalTokens");
    const modalRoadMap = document.querySelector("#modalRoadMap");
    const modalCommunity = document.querySelector("#modalCommunity");
    const modalWhitePaper = document.querySelector("#modalWhitePaper");
    const modalLinks = document.querySelectorAll(".modalLink");
    const modalLinksArray = Array.from(modalLinks);

    const removeActiveModalClass = () => {
      modalLinksArray.map((link) => {
        link.classList.remove("actival");
      });
    };

    if (scroll <= 250) {
      removeActiveModalClass();
      modalHome.classList.add("actival");
    } else if (scroll > 250 && scroll < 2850) {
      removeActiveModalClass();
      modalGamePlay.classList.add("actival");
    } else if (scroll > 2850 && scroll < 4000) {
      removeActiveModalClass();
      modalTokens.classList.add("actival");
    } else if (scroll > 4000 && scroll < 4642) {
      removeActiveModalClass();
      modalRoadMap.classList.add("actival");
    } else if (scroll > 4642) {
      removeActiveModalClass();
      modalCommunity.classList.add("actival");
    }
  });
  return (
    <div id="modal" className="modal">
      <div className="modalContent">
        <div className="modalLinks">
          <div id="modalHome" className="modalLink">
            <div className="linkContent">
              <div className="chip">
                <div className="chipContent"></div>
              </div>
              <div className="link">
                <h4 className={orbitron.className}>Home</h4>
              </div>
              <div className="chip">
                <div className="chipContent"></div>
              </div>
            </div>
          </div>
          <div id="modalGamePlay" className="modalLink">
            <div className="linkContent">
              <div className="chip">
                <div className="chipContent"></div>
              </div>
              <div className="link">
                <h4 className={orbitron.className}>Gameplay</h4>
              </div>
              <div className="chip">
                <div className="chipContent"></div>
              </div>
            </div>
          </div>
          <div id="modalTokens" className="modalLink">
            <div className="linkContent">
              <div className="chip">
                <div className="chipContent"></div>
              </div>
              <div className="link">
                <h4 className={orbitron.className}>Tokens</h4>
              </div>
              <div className="chip">
                <div className="chipContent"></div>
              </div>
            </div>
          </div>
          <div id="modalRoadMap" className="modalLink">
            <div className="linkContent">
              <div className="chip">
                <div className="chipContent"></div>
              </div>
              <div className="link">
                <h4 className={orbitron.className}>Roadmap</h4>
              </div>
              <div className="chip">
                <div className="chipContent"></div>
              </div>
            </div>
          </div>
          <div id="modalCommunity" className="modalLink">
            <div className="linkContent">
              <div className="chip">
                <div className="chipContent"></div>
              </div>
              <div className="link">
                <h4 className={orbitron.className}>Community</h4>
              </div>
              <div className="chip">
                <div className="chipContent"></div>
              </div>
            </div>
          </div>
          <div id="modalWhitePaper" className="modalLink">
            <div className="linkContent">
              <div className="chip">
                <div className="chipContent"></div>
              </div>
              <div className="link">
                <h4 className={orbitron.className}>Whitepaper</h4>
              </div>
              <div className="chip">
                <div className="chipContent"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;

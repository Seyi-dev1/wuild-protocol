"use client";
import Navbar from "../components/navbar/Navbar";
import styles from "./globals.module.scss";
import { Monoton } from "next/font/google";
import { Orbitron } from "next/font/google";
import { Space_Grotesk } from "next/font/google";
import React from "react";
import store from "./redux/store";
import { Provider } from "react-redux";
import Modal from "@/components/modal/Modal";

export const monoton = Monoton({ subsets: ["latin"], weight: "400" });
export const orbitron = Orbitron({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});
export const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const toggle = () => {
  const modal = document.querySelector("#modal");
  modal.classList.toggle(`${styles.show}`);
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Provider store={store}>
        <body className={styles.layout}>
          <div className={styles.navbar}>
            <div className={styles.navContainer}>
              <Navbar toggle={toggle} />
            </div>
          </div>
          <div className={styles.modal} id="modal">
            <Modal />
          </div>
          {children}
        </body>
      </Provider>
    </html>
  );
}

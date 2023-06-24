"use client";
import styles from "./skillCard.module.scss";

import React from "react";
import { spaceGrotesk } from "@/app/layout";
import Image from "next/image";

const SkillCard = ({ title, heading, images }) => {
  return (
    <div className={styles.skillCard}>
      <div className={`${spaceGrotesk.className} ${styles.header}`}>
        <p>{title}</p>
        <h4>{heading}</h4>
      </div>
      <div className={styles.images}>
        {images.map((image) => {
          return (
            <div className={styles.image} key={image.id}>
              <Image
                src={image.Image}
                className={
                  image.type !== "lock" && image.id === 1
                    ? `${styles.rotation} ${styles.one}`
                    : image.type !== "lock" && image.id === 2
                    ? `${styles.rotation} ${styles.two}`
                    : image.type !== "lock" && image.id === 3
                    ? `${styles.rotation} ${styles.three}`
                    : image.type !== "lock" && image.id === 4
                    ? `${styles.rotation} ${styles.four}`
                    : ""
                }
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SkillCard;

import React from "react";
import scss from "./RightPart.module.scss";
import Image from "next/image";
import { arr6, arr7, arr8 } from "../Array";
import troitochie from "@/assets/Dashboard/troitochie.svg";
import chickenHell from "@/assets/dishes/img1.svg";

function RigthPart() {
  const top = arr6.map(({ img, title, down }, index) => (
    <div className={scss.top} key={index}>
      <Image src={img} alt="" />
      {title && <p>{title}</p>}
      {down && <Image className={scss.down} src={down} alt="" />}
    </div>
  ));

  const operations = arr7.map(({ img, text }, index) => (
    <article key={index} className={scss.operations}>
      {img}
      <span>{text}</span>
    </article>
  ));

  const history = arr8.map(({ img, title, status, time }, index) => (
    <div className={scss.cards} key={index}>
      <Image src={img} className={scss.dishImg} alt="" />
      <article className={scss.texts}>
        <h1>{title}</h1>
        <p>{status}</p>
      </article>
      <span>{time}</span>
    </div>
  ));

  return (
    <div className={scss.rightPart}>
      <header>{top}</header>
      <main className={scss.wallet}>
        <div className={scss.header}>
          <h1>Wallet</h1>
          <Image src={troitochie} alt="" />
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
          height="100%"
          viewBox="0 0 400 250"
          preserveAspectRatio="xMidYMid meet"
        >
          <rect x="0" y="0" width="400" height="180" rx="20" fill="#6F4CC9" />
          <rect x="0" y="50" width="400" height="180" rx="5" fill="#2E2B3B" />

          <rect x="30" y="20" width="30" height="20" rx="3" fill="#BDAEF9" />
          <circle cx="70" cy="30" r="3" fill="#BDAEF9" />
          <circle cx="80" cy="30" r="3" fill="#BDAEF9" />
          <circle cx="90" cy="30" r="3" fill="#BDAEF9" />

          <text
            x="30"
            y="120"
            font-family="Arial"
            font-size="20"
            fill="white"
            letter-spacing="5"
          >
            4714 2400 6201 1524
          </text>

          <text x="30" y="170" font-family="Arial" font-size="12" fill="#999">
            Cad Holder
          </text>
          <text x="30" y="190" font-family="Arial" font-size="20" fill="white">
            Bayana M
          </text>

          <circle cx="340" cy="180" r="20" fill="#EB001B" />
          <circle cx="360" cy="180" r="20" fill="#F79E1B" />
          <circle cx="350" cy="180" r="20" fill="#FF5F00" fill-opacity="0.6" />
        </svg>

        <div className={scss.walletDown}>{operations}</div>
      </main>
      <footer>
        <h1>Recommended</h1>
        <main className={scss.historyCards}>{history}</main>
      </footer>
    </div>
  );
}

export default RigthPart;

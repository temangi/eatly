"use client";
import React, { useState } from "react";
import scss from "./Middle.module.scss";
import Image from "next/image";
import tamak from "@/assets/tamak.svg";
import minus from "@/assets/Dashboard/minus.svg";
import down from "@/assets/Dashboard/down.svg";
import graph from "@/assets/Dashboard/Graph.svg";
import next from "@/assets/Dashboard/next.svg";
import { arr3, arr4, arr5 } from "../Array";

function Middle() {
  const [active, setActive] = useState("1D");

  const date = arr3.map((el, index) => (
    <p
      key={index}
      onClick={() => setActive(el)}
      className={active == el ? scss.active : scss.nonActive}
    >
      {el}
    </p>
  ));

  const purchases = arr4.map(({ img, title, desc, price, back }, index) => (
    <div className={scss.chickenLeft} key={index}>
      <div className={scss.cardMain}>
        <aside>
          <Image src={img} alt="" />
          <div>
            <h1>{title}</h1>
            <p>{desc}</p>
          </div>
        </aside>
        <span>{price}</span>
      </div>
      <p style={{ background: `${back[1]}` }} className={scss.line}>
        <span
          className={scss.inLine}
          style={{ background: `${back[0]}` }}
        ></span>
      </p>
    </div>
  ));

  const asidePart = arr5.map(({ price, type, fill }, index) => (
    <div className={scss.infos} key={index}>
      <svg
        width="20"
        height="20"
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="100" cy="100" r="50" fill={fill} />
      </svg>
      <div>
        <h1>{price}</h1>
        <span>{type}</span>
      </div>
    </div>
  ));

  return (
    <div className={scss.middle}>
      <h1>Dashboard</h1>
      <section className={scss.get}>
        <main>
          <h1>50% OFF</h1>
          <h2>Daily deals</h2>
        </main>
        <Image className={scss.tamak} priority src={tamak} alt="cake" />
      </section>
      <section className={scss.chart}>
        <header>
          <h1>Order Chart</h1>
          <aside>
            <div>
              <Image src={minus} alt="" /> <span>Expences</span>
            </div>
            <p>
              Dec 10 - May 16 <Image src={down} alt="" />
            </p>
          </aside>
        </header>
        <Image className={scss.graph} src={graph} alt="" />
        <div>{date}</div>
      </section>
      <section className={scss.bottomCards}>
        <div className={scss.purchasesPart}>
          <header className={scss.header}>
            <h1>Purchases</h1>
            <p>
              This Month <Image src={next} alt="" />{" "}
            </p>
          </header>
          {purchases}
        </div>
        <div className={scss.stats}>
          <header className={scss.header}>
            <h1 className={scss.heading}>Statistics</h1>
            <p>
              View All <Image src={next} alt="" />{" "}
            </p>
          </header>
          <main>
            <svg
              width="200"
              height="200"
              viewBox="0 0 200 200"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="100"
                cy="100"
                r="80"
                fill="none"
                stroke="#ddd"
                strokeWidth="20"
              />
              <path
                d="M 100 20
           A 81 80 0 1 1 36 150
           C 40 160 45 166 54 "
                fill="none"
                stroke="#6C52B4"
                strokeWidth="20"
                strokeLinecap="round"
              />
            </svg>
            <aside>{asidePart}</aside>
          </main>
        </div>
      </section>
    </div>
  );
}

export default Middle;

"use client";
import { use, useState } from "react";
import scss from "./Main.module.scss";
import Image from "next/image";
import trustPilot from "../../assets/Main/trustpilot.svg";
import star from "../../assets/Main/Star.svg";
import tarelka from "../../assets/Main/tarelka2.svg";
import tarelka2 from "../../assets/Main/tarelka.svg";
import graph from "../../assets/Main/Graph.svg";

function Main() {
  const [activeButton, setActiveButton] = useState("getStarted");
  const [activeDate, setActiveDate] = useState("Main");
  const [activeDays, setActiveDays] = useState("2D");

  const allTime = ["Main", "Weekly", "Monthly", "Yearly"];
  const seeAllTime = allTime.map((el, index) => (
    <nav
      key={index}
      className={activeDate === el ? scss.activeDate : scss.noActiveDate}
      onClick={() => setActiveDate(el)}
    >
      {el}
    </nav>
  ));

  const days = ["2D", "4D", "5D", "6D", "7D"];
  const seeDays = days.map((el, index) => (
    <section
      key={index}
      className={activeDays === el ? scss.activeDays : scss.noActiveDays}
      onClick={() => setActiveDays(el)}
    >
      {el}
    </section>
  ));
  return (
    <section className={scss.main}>
      <header>
        <span className={scss.users}>
          <hr />
          OVER 1000 USERS
        </span>
        <h1>
          Enjoy Foods All <br /> Over The <span> World</span>
        </h1>
        <p className={scss.desc}>
          EatLy help you set saving goals, earn cash back offers, Go <br />
          to disclaimer for more details and get paychecks up to two <br /> days
          early. Get a <span>$20 bonus.</span>
        </p>
        <div>
          <button
            className={
              activeButton === "getStarted" ? scss.active : scss.noActive
            }
            onClick={() => setActiveButton("getStarted")}
          >
            Get Started
          </button>
          <button
            className={activeButton === "goPro" ? scss.active : scss.noActive}
            onClick={() => setActiveButton("goPro")}
          >
            Go Pro
          </button>
        </div>
        <article>
          <Image src={trustPilot} alt="Trust" />
          <nav>
            <Image src={star} alt="star" />
            <p>4900+</p>
          </nav>
        </article>
      </header>
      <footer>
        <p className={scss.dish}>
          <Image className={scss.tamak} src={tarelka} alt="dish" />
        </p>
        <article className={scss.articles}>
          <aside>
            <Image className={scss.miniDish} src={tarelka2} alt="dish2" />
            <p>
              Chicken Hell <span>On The Way</span>
            </p>
          </aside>
          <span className={scss.time}>3:09 PM</span>
        </article>
        <main>
          <section>{seeAllTime}</section>
          <div className={scss.graphContainer}>
            <Image className={scss.graphImage} src={graph} alt="Graph" />
            <aside>
              <div className={scss.line} style={{ top: "20%" }}></div>
              <div className={scss.line} style={{ top: "40%" }}></div>
              <div className={scss.line} style={{ top: "60%" }}></div>
            </aside>
          </div>
          <article className={scss.daysContainer}>{seeDays}</article>
        </main>
      </footer>
    </section>
  );
}

export default Main;

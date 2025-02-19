import React from "react";
import scss from "./Chicken.module.scss";
import Image from "next/image";
import hell from "../assets/hell.svg";
import swe from "../assets/swe.svg";
import fish from "../assets/fish.svg";
import chevron from "../assets/chevron.svg";
import wallet from "../assets/wallet.svg";
import money from "../assets/money.svg";

function Chicken() {
  const imgs = [
    {
      img: hell,
      title: "Chicken Hell",
      test: "On The Way",
      time: "3:09 PM",
    },
    {
      img: swe,
      title: "Swe Dish",
      test: "Delivered",
      time: "Yesterday",
    },
    {
      img: fish,
      title: "Fish Hell Veg",
      test: "Cancelled",
      time: "Yesterday",
    },
  ];

  const purchases = [
    {
      img: wallet,
      title: "Expense",
      desc: "Increased By 10%",
      price: "$409.00",
      back : ["#6C5FBC", "#6b5fbc6c"]
    },
    {
      img: money,
      title: "Vocher Usage",
      desc: "Increased By 5%",
      price: "$45.78",
       back : ["#FBAD18", "#fbac1868"]
    },
  ];

  const purchasesCards = purchases.map(({ img, title, desc, price, back }, index) => (
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
      <p style={{background : `${back[1]}`}} className={scss.line}><span className={scss.inLine} style={{background: `${back[0]}`}}></span></p>
    </div>
  ));

  const arr = imgs.map(({ img, title, test, time }, index) => (
    <div className={scss.chickenCard} key={index}>
      <article>
        <Image src={img} alt="photo" />
        <div>
          <h1>{title}</h1>
          <p>{test}</p>
        </div>
      </article>
      <p>{time}</p>
    </div>
  ));

  return (
    <>
      <section className={scss.chicken}>
        <footer>
          <h1 className={scss.fish}>
            Control <span>Purchases</span> <br /> Via Dashboard
          </h1>
          <aside className={scss.title}>{arr}</aside>
        </footer>
        <main>
          <header>
            <h1>Purchases</h1>
            <div className={scss.p}>
              <p>This month</p>
              <Image src={chevron} alt="" />
            </div>
          </header>
          <footer>{purchasesCards}</footer>
        </main>
      </section>
    </>
  );
}
export default Chicken;

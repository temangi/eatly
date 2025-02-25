"use client"
import React, { useState } from "react";
import scss from "./Pricing.module.scss";
import yes from "../../assets/Pricing/true.svg";
import no from "../../assets/Pricing/false.svg";
import icon from "../../assets/Pricing/icon.svg";
import Image from "next/image";

function Pricing() {
  const [active,setActive] = useState({
    active0 : false,
    active1 : false
  })

  const pricing = [
    { title: "Pricing", desc: "Affordable Basic & Pro Plans" },
    { title: "Basic", desc: "Completely 100% Free Plan" },
    { title: "Premium", desc: "Amazing Premium Features Plan" },
    { title: "  ", desc: "  " },
  ];
  const seePricing = pricing.map(({ title, desc }, index) => (
    <article key={index}>
      <h1>{title}</h1>
      <span>{desc}</span>
    </article>
  ));

  
  const spisok = ["Support 24/7","Fast Delivery","20% Off Food Deals","Transaction History"]
  const seeSpisok = spisok.map((el,index) => (
    <nav key={index}><Image className={scss.adaptYes} src={yes} alt="yes"/>{el}</nav>
  ));

  const spisok2 = ["Support 24/7","Fast Delivery","20% Off Food Deals","Transaction History","Weekend Deals","Dashboard Access","Premium Group Access"]
  const seeSpisok2 = spisok2.map((el,index) => (
    <nav key={index}><Image className={scss.adaptYes} src={yes} alt="yes"/>{el}</nav>
  ));

  const monthCost = ["0", "5"];
  const seeMonthCost = monthCost.map((el, index) => (
    <div key={index} className={scss.price}>
      <aside>
        <h2>$</h2>
        <h1>{el}</h1>
        <span>/month</span>
      </aside>
    </div>
  ));

  function changeState(index) {
    setActive(prev => ({
      ...prev,
      [`active${index}`]: !prev[`active${index}`] // Меняем на противоположное значение
    }));
  }
  
  const features = [
    {
      title: "Support 24/7",
      img: yes,
      img2: yes,
    },
    {
      title: "Fast Delivery",
      img: yes,
      img2: yes,
    },
    {
      title: "20% Off Food Deals",
      img: yes,
      img2: yes,
    },
    {
      title: "Transaction History",
      img: yes,
      img2: yes,
    },
    {
      title: "Weekend Deals",
      img: no,
      img2: yes,
    },
    {
      title: "Dashboard Access",
      img: no,
      img2: yes,
    },
    {
      title: "Premium Group Access",
      img: no,
      img2: yes,
    },
  ];
  const seeFeatures = features.map(({ title, img, img2 }, index) => (
    <nav key={index}>
      <p>{title}</p>
      <Image
        className={img == no ? scss.krestik : scss.done}
        src={img}
        alt="image"
      />
      <Image
        className={img2 == no ? scss.krestik : scss.done}
        src={img2}
        alt="image"
      />
    </nav>
  ));

  const btns = ["start free", "start Pro"];
  const seeBtns = btns.map((el, index) => <button key={index}>{el}</button>);

  const adapMain = [
    {
      title: "Basic",
      desc: "Completely 100% Free Plan",
      price : "0",
      btn : "start free",
      list : seeSpisok,
    },
    {
      title: "Premium",
      desc: "Amazing Premium Features Plan",
      price : "9",
      btn : "start Pro",
      list : seeSpisok2,
    },
  ];
 

  const cardIn = adapMain.map((el, index) => (
    <div key={index} className={scss.block}>
      <h1 className={scss.name}>{el.title}</h1>
      <div className={scss.price}>
        <aside>
          <h2>$</h2>
          <h1>{el.price}</h1>
          <span>/month</span>
        </aside>
      </div>
      <span>{el.desc}</span>
      <button>{el.btn}</button>
      <p onClick={() => changeState(index)}>See features <Image className={scss.icon} src={icon} alt="icon"/></p>
      <main className={`${active[`active${index}`] ? scss.hidden : ""}`}>{el.list}</main>
    </div>
  ));


  return (
    <section className={scss.outsidePricing}>
      <section className={scss.insidePricing}>
        <header>
          {seePricing}
          {seeMonthCost}
        </header>
        <main>
          <h1>Core features</h1>
          <div className={scss.feature}>{seeFeatures}</div>
        </main>
        <footer>
          <p></p>
          {seeBtns}
        </footer>
      </section>
      <section className={scss.adaptive}>
        <main className={scss.adaptMain}>{cardIn}</main>
      </section>
    </section>
  );
}

export default Pricing;

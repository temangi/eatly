import React from "react";
import scss from "./Pricing.module.scss";
import yes from "../../assets/Pricing/true.svg";
import no from "../../assets/Pricing/false.svg";
import Image from "next/image";

function Pricing() {
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
      <Image className={img == no ? scss.krestik : scss.done} src={img} alt="image" />
      <Image className={img2 == no ? scss.krestik : scss.done} src={img2} alt="image" />
    </nav>
  ));

  const btns = [  "start free","start Pro"]
  const seeBtns = btns.map((el,index) => (

     <button key={index}>{el}</button>
  ))
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
    </section>
  );
}

export default Pricing;

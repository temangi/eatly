import React from "react";
import scss from "./Menu.module.scss";
import phone from "../Menu/assets/phone.svg";
import arrow from "../Menu/assets/arrow.svg";
import arrow2 from "../Menu/assets/arrow2.svg";
import Image from "next/image";

function Menu() {
  const arr = [
    {
      title: "10K+",
      desc: "Satisfied Costumers All Great Over The World",
    },
    {
      title: "4M",
      desc: "Healthy Dishes Sold Including Milk Shakes Smooth",
    },
    {
      title: "99.99%",
      desc: "Reliable Customer Support We Provide Great Experiences",
    },
  ];

  const cards = arr.map(({ title, desc }, index) => (
    <div key={index}>
      <h1>{title}</h1>
      <p>{desc}</p>
    </div>
  ));

  return (
    <>
      <section className={scss.menu}>
        <main>{cards}</main>
      </section>
      <section className={scss.phone}>
        <Image src={phone} alt="" />
        <main>
          <h1>
            Premium <span>Quality</span> <br /> For Your Health
          </h1>
          <ul>
            <li>
              Premium quality food is made with ingredients that are packed with
              essential vitamins, minerals.
            </li>
            <li>
              These foods promote overall wellness by support healthy digestion
              and boosting immunity
            </li>
          </ul>
          <button>
            Download <Image src={arrow} alt="" />
          </button>
          <Image className={scss.line} src={arrow2} alt="" />
        </main>
      </section>
    </>
  );
}
export default Menu;

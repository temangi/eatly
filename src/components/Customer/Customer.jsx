import React from "react";
import Image from "next/image";
import scss from "./Customer.module.scss";
import chel from "../../assets/Customer/obezyana.jpg";
import kovychka from "../../assets/Customer/kovychka.svg";
import star from "../../assets/Customer/Star.svg";
import chelik from "../../assets/Customer/chelik.jpg";

function Customer() {
  const cards = [
    {
      title: "Alexander R.",
      year: "01 Year With Us",
      img1: chel,
      img2: kovychka,
      img3: star,
    },
    {
      title: "Temirlan T",
      year: "5 Year With Us",
      img1: chelik,
      img2: kovychka,
      img3: star,
    },
  ];
  const seeCards = cards.map(({ title, year, img1, img2, img3 }, index) => (
    <header key={index}>
      <main>
        <div>
          <Image className={scss.chel} src={img1} alt="chel" />
          <aside>
            {" "}
            <p>{title}</p>
            <span>{year}</span>
          </aside>
        </div>
        <Image className={scss.lov} src={img2} alt="kov" />
      </main>
      <p>
        “The mysterious forest whispered secrets as moonlight danced upon
        ancient trees. Shadows moved, revealing hidden paths where dreams and
        reality intertwined, shaping destiny with every silent step forward.”
      </p>
      <Image className={scss.star} src={img3} alt="star" />
    </header>
  ));
  return (
    <section className={scss.customer}>
      <article>
        <h1>
          Customer <span>Say</span>
        </h1>
        <section>{seeCards}</section>
      </article>
      <p className={scss.line}>
        <span className={scss.miniLine}></span>
      </p>
    </section>
  );
}

export default Customer;

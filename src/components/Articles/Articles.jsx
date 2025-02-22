"use client";

import React from "react";
import scss from "./Articles.module.scss";
import img from "../../assets/Articles/photo.svg";
import img2 from "../../assets/Articles/Image.svg";
import img3 from "../../assets/Articles/Image (1).svg";
import img4 from "../../assets/Articles/Image (2).svg";
import img5 from "../../assets/Articles/Image (3).svg";
import img6 from "../../assets/Articles/Image (4).svg";
import img7 from "../../assets/Articles/Image (7).svg";
import ava from "../../assets/Articles/ava.svg";
import left from "../../assets/Articles/strelka.svg";
import right from "../../assets/Articles/strelkaR.svg";
import Image from "next/image";
import Link from "next/link";

const arr = [
  {
    img: img,
    title: "The easiest way to get your meal!",
    name: "Oliver",
  },
  {
    img: img2,
    title: "Fast and delicious food at your doorstep.",
    name: "Sophia",
  },
  {
    img: img3,
    title: "Order your favorite dish in just a few clicks!",
    name: "Liam",
  },
  {
    img: img4,
    title: "Hungry? We've got you covered!",
    name: "Emma",
  },
  {
    img: img5,
    title: "Enjoy fresh and tasty meals anytime.",
    name: "Noah",
  },
  {
    img: img7,
    title: "Craving something special? Order now!",
    name: "Ava",
  },
];



const seeArr = arr.map(({ img, title,name }, index) => (
  <Link className={scss.card}  key={index} href={`/blogCard/${index}?title=${title}&name=${name}&img=${encodeURIComponent(img.src)}`}>
    <article >
      <Image className={scss.photos} src={img} alt="photo" />
      <h1>{title}</h1>
      <aside>
        <div>
          <Image className={scss.ava} src={ava} alt="ava" />
          <nav>
            <p>Written By</p>
            <h6>{name}</h6>
          </nav>
        </div>
        <span>15 DEC, 2022</span>
      </aside>
    </article>
  </Link>
));

function Articles() {
  return (
    <section className={scss.articles}>
      <h1 className={scss.title}>
        Latest <span>Articles</span>{" "}
      </h1>
      <main>{seeArr}</main>
      <footer>
        <Image className={scss.left} src={left} alt="left" />
        <Image className={scss.right} src={right} alt="right" />
      </footer>
    </section>
  );
}

export default Articles;

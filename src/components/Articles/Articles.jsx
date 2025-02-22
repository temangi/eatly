import React from "react";
import scss from "./Articles.module.scss";
import img from "../../assets/Articles/photo.svg";
import img2 from "../../assets/Articles/Image.svg"
import img3 from "../../assets/Articles/Image (1).svg"
import img4 from "../../assets/Articles/Image (2).svg"
import img5 from "../../assets/Articles/Image (3).svg"
import img6 from "../../assets/Articles/Image (4).svg"
import img7 from "../../assets/Articles/Image (7).svg"
import ava from "../../assets/Articles/ava.svg"
import left from "../../assets/Articles/strelka.svg"
import right from "../../assets/Articles/strelkaR.svg"
import Image from "next/image";

const arr = [
  {
    img: img,
    title: "How To Order Food ?",
  },
  {
    img: img2,
    title: "How To Order Food ?",
  },
  {
    img: img3,
    title: "How To Order Food ?",
  },
  {
    img: img4,
    title: "How To Order Food ?",
  },
  {
    img: img5,
    title: "How To Order Food ?",
  },
  {
    img: img7,
    title: "How To Order Food ?",
  },
];
const seeArr = arr.map(({ img, title }, index) => (
  <article key={index}>
    <Image className={scss.photos} src={img} alt="photo"/>
    <h1>{title}</h1>
    <aside>
        <div>
            <Image className={scss.ava} src={ava} alt="ava"/>
            <nav>
                <p>Written By</p>
                <h6>Perperzon</h6>
            </nav>
        </div>
        <span>15 DEC, 2022</span>
    </aside>
  </article>
));

function Articles() {
  return (
    <section className={scss.articles}>
      <h1 className={scss.title}>Latest  <span>Articles</span> </h1>
      <main>{seeArr}</main>
      <footer>
        <Image className={scss.left} src={left} alt="left"/>
        <Image className={scss.right} src={right} alt="right"/>
      </footer>
    </section>
  );
}

export default Articles;

import React from "react";
import scss from "./Article.module.scss";
import img from "../../assets/Articles/photo.svg";
import img2 from "../../assets/Articles/Image.svg"
import img3 from "../../assets/Articles/Image (1).svg"
import ava from "../../assets/Articles/ava.svg"
import arrow from "../../assets/Article/arroww.svg"
import Image from "next/image";

function Article() {
  const arr = [
    {
      title: "Select your items",
      desc: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. ",
    },
    {
      title: "Place your order",
      desc: "Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of 'de Finibus Bonorum et Malorum' (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. ",
    },
  ];
  const seeArr = arr.map(({ title, desc }, index) => (
    <section key={index}>
      <h1>{title}</h1>
      <p>{desc}</p>
    </section>
  ));

  const arr2 = [
    {
      img: img,
      title: "How To Deposit In DaPay ?",
    },
    {
      img: img2,
      title: "Top 5 Business Ideas",
    },
    {
      img: img2,
      title: "How To Control Money ?",
    },
  ];
  const seeArr2 = arr2.map(({ img, title }, index) => (
    <article key={index}>
        <b style={{backgroundImage : `url(${img.src})`}} className={scss.photos}></b>
      <h1>{title}</h1>
      <aside>
          <div className={scss.mini}>
              <Image className={scss.ava} src={ava} alt="ava"/>
              <nav className={scss.miniNav}>
                  <p>Written By</p>
                  <h6>Perperzon</h6>    
              </nav>
          </div>
          <span>15 DEC, 2022</span>
      </aside>
    </article>
  ));
  return (
    <section className={scss.article}>
      <header>
        <main>
          <nav>
            <h1>Browse restaurants and menus</h1>
            <p>
              Once you're logged in, you can browse through the list of
              available restaurants on the Eatly website. You can filter by
              cuisine, price, and distance to find the perfect restaurant for
              your needs. Click on a restaurant to view its menu. Once you're
              logged in, you can browse through the list of available
              restaurants on the Eatly website. You can filter by cuisine,
              price, and distance.
            </p>
            <ul>
              <li>It was popularized in the 1960s with the release</li>
              <li>Lorem Ipsum passages, and more recently </li>
            </ul>
          </nav>
          <div>{seeArr}</div>
        </main>
        <aside className={scss.top}>
          <h1>Top Articles</h1>
          <div className={scss.cards}>{seeArr2}</div>
        </aside>
      </header>
      <button>Next Article <Image src={arrow} alt="arrow"/></button>
    </section>
  );
}

export default Article;

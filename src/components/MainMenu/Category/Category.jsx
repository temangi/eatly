import React from "react";
import scss from "./Categoty.module.scss";
import Image from "next/image";
import { arr } from "./arr";
import { price } from "./arr";

function Category() {
  const cards = arr.map(({ img, title, clas }, index) => (
    <div className={clas} key={index}>
      <Image src={img} className={scss.img} alt="" />
      <span>{title}</span>
    </div>
  ));

  const prices = price.map((el, index) => (
    <nav className={scss.prices} key={index}>
      {el}
    </nav>
  ));
  return (
    <div className={scss.category}>
      <h2>Category</h2>
      <header>{cards}</header>
      <main>
        <h2>Sort By</h2>
        <div>
          <p className={scss.sort}>
            <span>Recomended</span>
            <span>Most Popular</span>
          </p>
          <p>
            <span>Fast Delivery</span>
          </p>
        </div>
      </main>
      <footer>
        <div>
          <h2>Price</h2>
          <main>
            <input type="range" />
            <aside>{prices}</aside>
          </main>
        </div>
        <button>Apply</button>
      </footer>
    </div>
  );
}

export default Category;

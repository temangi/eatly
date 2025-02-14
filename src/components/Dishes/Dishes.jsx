import React from "react";
import scss from "./Dishes.module.scss";
import DishesCards from "./DishesCards/DishesCards";
import { dishes } from "./Dishes.js";
import Link from "next/link.js";


function Dishes() {

    const cards = dishes.map((el, index) => <DishesCards key={index} {...el}/>) 

  return (
    <div className={scss.dishes}>
        <h1>Our Top <span>Dishes</span></h1>
      <main>{cards}</main>
      <Link className={scss.viewAll} href={"/menu"}>
        View All
        <svg
          className={scss.arrow}
          width="30"
          height="100"
          viewBox="0 0 200 100"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line
            x1="10"
            y1="50"
            x2="100"
            y2="50"
            stroke="#ACADB9"
            strokeWidth="15"
            strokeLinecap="round"
          />
          <polyline
            points="80,20 110,50 80,80"
            fill="none"
            stroke="#ACADB9"
            strokeWidth="15"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </Link>
    </div>
  );
}

export default Dishes;

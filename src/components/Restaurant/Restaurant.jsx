"use client";
import scss from "./Restaurant.module.scss";
import { arr } from "../Restaurant/Restaurant.js";
import Link from "next/link";
import Cards from "./Cards/Cards.jsx";

function Restaurant() {
  const cards = arr.map((el, index) => <Cards key={index} {...el} />);

  return (
    <div className={scss.restaurant}>
      <h1>
        Our Top <span>Restaurants</span>
      </h1>
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

export default Restaurant;

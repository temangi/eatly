"use client";
import React from "react";
import scss from "../Restaurant/Restaurant.module.scss";
import scss2 from "../Dishes/Dishes.module.scss";
import DishesCards from "../Dishes/DishesCards/DishesCards";
import { dishes } from "../Dishes/Dishes.js";
import { arr } from "../Restaurant/Restaurant.js";
import Link from "next/link";
import Cards from "../Restaurant/Cards/Cards.jsx";

function RestaurantMenu() {
  const cards = arr.map((el, index) => <Cards key={index} {...el} />);
  const cards2 = dishes.map((el, index) => <DishesCards key={index} {...el} />);
  return (
    <>
      <section className={scss.restaurant}>
        <header className={scss.restaurantHeader}>
          <h1>
            Our Top <span>Restaurants</span>
          </h1>
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
        </header>
        <main>{cards}</main>
      </section>
      <section className={scss2.dishes}>
        <header className={scss2.restaurantDishes}>
          <h1>
            Our Top <span>Dishes</span>
          </h1>
          <Link className={scss2.viewAll} href={"/menu"}>
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
        </header>
        <main>{cards2}</main>
      </section>
    </>
  );
}

export default RestaurantMenu;

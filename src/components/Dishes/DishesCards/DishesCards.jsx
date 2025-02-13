"use client"
import React, { useState } from 'react'
import scss from '../Dishes.module.scss'
import Image from "next/image";
import Link from "next/link";
import img1 from "../../../assets/dishes/img1.svg";
import star from "../../../assets/restaurant/star.svg";
import plus from "../../../assets/dishes/+.svg";
import { dishes } from '../Dishes';

function DishesCards({img, title, time, clas, type, rating, price,cent}) {
    const [fav, setFav] = useState(false)
  return (
        <div className={scss.eachCard}>
        <svg
          className={fav ? scss.fav : scss.heart}
          onClick={() => setFav(!fav)}
          width="40"
          height="25"
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          stroke="#323142"
          stroke-width="20"
        >
          <path
            d="M110 180s-70-40-80-80c-10-20-10-40 0-60s40-40 80 0c40-40 70-20 80 0s10 40 0 60c-20 40-80 80-80 80z"
            fill="none"
            stroke="#323142"
            stroke-width="20"
          />
        </svg>
        <Image src={img} priority className={scss.imgs} alt="img1" />
        <article>
          <p className={clas}>{type}</p>
          <h1>{title}</h1>
          <footer>
            <aside>
              <span>{time} • </span>
              <div>
                <Image src={star} priority alt="" />
                <span>{rating}</span>
              </div>
            </aside>
            <div className={scss.bottom}>
              <h2>
                {price}<span>{cent}</span>{" "}
              </h2>
              <Image className={scss.plus} src={plus} alt="" />
            </div>
          </footer>
        </article>
      </div>
  )
}

export default DishesCards
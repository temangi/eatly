
"use client";
import React, { useState } from "react";
import scss from "../Restaurant.module.scss";
import star from "../../../assets/restaurant/star.svg";
import fav from "../../../assets/restaurant/fav.svg";
import Image from "next/image";

function Cards({ img, title, time, rating, type }) {
    const [add, setAdd] = useState(false);
    
  return (
     
        <div className={scss.eachCard}>
          <Image src={img} priority className={scss.imgs} alt="img1" />
          <article>
            <p className={scss.type}>{type}</p>
            <h1>{title}</h1>
            <footer>
              <aside>
                <span>{time} •</span>
                <div>
                  <Image src={star} priority alt="" />
                  <span>{rating}</span>
                </div>
              </aside>
              <Image
                src={fav}
                onClick={() => setAdd(!add)}
                className={add ? scss.fav : scss.add}
                priority
                alt=""
              />
            </footer>
          </article>
        </div>
      
  )
}

export default Cards
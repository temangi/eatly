import React from 'react'
import scss from './Restaurant.module.scss'
import star from '../../assets/restaurant/star.svg'
import fav from '../../assets/restaurant/fav.svg'
import { arr } from '../Restaurant/Restaurant.js'
import Image from 'next/image'
import Link from 'next/link'
function Restaurant() {

    const cards = arr.map(({img, title, time, rating, type}, index) => <div key={index} className={scss.eachCard}>
    <Image src={img} priority className={scss.imgs} alt="img1"/>
    <article>
        <p className={scss.type}>{type}</p>
        <h1>{title}</h1>
        <footer>
           <aside>
           <span>{time} •</span>
            <div>
                <Image  src={star} priority alt="" />
                <span>{rating}</span>
            </div>
           </aside>
            <Image src={fav} className={scss.fav} priority alt="" />
        </footer>
    </article>
</div> )

  return (
    <div className={scss.restaurant}>
        <h1>Our Top <span>Restaurants</span></h1>
      <main>{cards}</main>  
      <Link  className={scss.viewAll} href={"/menu"}>View All<svg width="25" height="50" viewBox="0 0 200 100" xmlns="http://www.w3.org/2000/svg">
  <line x1="10" y1="50" x2="150" y2="50" stroke="#acadb9" stroke-width="15" stroke-linecap="round"/>
  <polyline points="120,20 150,50 120,80" fill="none" stroke="#acadb9" stroke-width="15" stroke-linecap="round" stroke-linejoin="round"/>
</svg></Link>
    </div>
  )
}

export default Restaurant
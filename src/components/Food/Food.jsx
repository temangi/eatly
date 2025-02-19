import React from 'react'
import Image from "next/image";
import scss from "./Food.module.scss"
import Iustration from "../Food/assets/Iustration.svg"
import plus from "../Food/assets/Plus.svg"
import Card from './Cards/Card';

 function Food() {
    const arr = [
        {
            title : "How long does delivery take?",
            img : plus ,
        },
        {
            title : "How Does It Work ?",
            img : plus ,
        },
        {
            title : "How does your food delivery service work?",
            img : plus ,
        },
        {
            title : "What payment options do you accept?",
            img : plus ,
        },
        {
            title : "Do you offer discounts or promotions?",
            img : plus ,
        },
    ];

    const cards = arr.map((el, index) => <Card key={index} {...el} />)

  return (
    <>
    <section className={scss.food}>
        <Image className={scss.foodDec} src={Iustration} alt="" />
        <h1>Frequently Asked <br /> <span>Questions</span></h1>
        <main>{cards}</main>
    </section>
    </>
  )
}
export default Food
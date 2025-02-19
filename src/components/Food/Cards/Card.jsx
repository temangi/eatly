"use client"
import { useState } from "react";
import scss from "../Food.module.scss"
import Image from "next/image";
import minus from "../assets/minus.svg"

function Card({img,title}) {
    const [open,setOpen] = useState (false)
    
  return (
    <div >
      <header onClick={() => setOpen(!open)}>
        <p>{title}</p>
        <Image  className={scss.plus} 
        src={ !open ?  img : minus} alt="plus" />
      </header>
      <span className={` ${open ? scss.open : scss.close}`}>
        You Can Get Information By Contacting Our Support Team Have 24/7
        Service.What’s The Difference Between Free And Paid Plan ?
      </span>
    </div>
  );
}

export default Card;

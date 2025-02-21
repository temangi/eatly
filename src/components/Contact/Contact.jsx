import React from 'react'
import Image from 'next/image'
import scss from "./Contact.module.scss"
import strelka  from "../assets/strelka.svg"
import telephone2 from "../assets/telephone2.svg"
import Arrow from "../assets/Arrow.svg"
import stars from "../assets/stars.svg"

const arr = [ 
    {
        type : "text",
        plaseholder : "Full name"
    },
    {
        type : "email",
        plaseholder : "Enter your email "
    },
]

function Contact() {
    const inputs = arr.map( ({type,plaseholder},index) =>
         <input type={type} placeholder={plaseholder} key={index}/>  )
  return (
    <>
    <section className={scss.contact}>
        <div className={scss.contactLeft}>
            <h1>Just Contact</h1>
            <Image src={strelka} alt="" /> 
        </div>
        <div className={scss.contactRight}>
            <h2>Customer <span>Support</span></h2>
            <form action="{}">
                {inputs}
                <textarea placeholder="Enter The Problem Or Query " name="" id=""></textarea>
                <button>Send Now</button>
            </form>
        </div>
        <Image className={scss.phone} src={telephone2} alt="" />     
    </section>
    <main className={scss.imgs}>
        <Image className={scss.stars} src={stars} alt="" />
        <Image className={scss.arrow} src={Arrow} alt="" />
        </main>
    </>
  )
}

export default Contact
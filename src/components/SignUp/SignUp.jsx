"use client"
import React, { useState } from "react";
import scss from "./SignUp.module.scss";
import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/signUp/logo.svg";
import imgMain from "@/assets/signUp/imgMain.svg";
import { arr, arr2 } from "./info";

function SignUp() {

    const [toggleSeen, setToggleSeen] = useState(false)

  const type = arr.map((el, index) => (
    <Image key={index} src={el} className={scss.typeImg} alt="" />
  ));

  const infos = arr2.map(({ img, placeholder, img2 }, index) => (
    <form className={scss.userInfo} key={index}>
      <Image src={img} alt="" />
      {toggleSeen ? <input type="text" placeholder={placeholder} /> : <input type="password" placeholder={placeholder} />}
      <Image src={img2}  alt="" onClick={() => setToggleSeen(!toggleSeen)} />
    </form>
  ));

  return (
    <div className={scss.signUp}>
      <section className={scss.leftPart}>
        <Image src={logo} alt="" />
        <main>
          <h1>Sign Up To eatly</h1>
          <div>{type} </div>
          <p>or</p>
          <article className={scss.inputs}>
            {infos} <button type="submit">Sign Up</button>
          </article>

          <span>
            Already Have An Account?{" "}
            <Link href="/login" className={scss.logIn}>
              Log In
            </Link>
          </span>
        </main>
        <article>
          <p>Privacy Policy</p>
          <p>Copyright 2022</p>
        </article>
      </section>
      <section className={scss.rightPart}>
        <Image src={imgMain} className={scss.imgMain} alt="" />
        <article className={scss.texts}>
          <h1>Find Foods With Love </h1>
          <span>
            Eatly Is The Food Delivery Dashboard And Having More Than 2K+ Dishes
            Including Asian, Chinese, Italians And Many More. Our Dashboard
            Helps You To Manage Orders And Money.
          </span>
        </article>
      </section>
    </div>
  );
}

export default SignUp;

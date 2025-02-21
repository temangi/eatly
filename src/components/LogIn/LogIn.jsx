"use client";
import React, { useState } from "react";
import scss from "../SignUp/SignUp.module.scss";
import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/signUp/logo.svg";
import imgMain from "@/assets/signUp/imgMain.svg";
import { arr, arr3 } from "../SignUp/info";
import Inputs from "./Input/Inputs";

function LogIn() {
  const [toggleScreen, setToggleScreen] = useState(false);
  const [value, setValue] = useState("");

  const type = arr.map((el, index) => (
    <Image key={index} src={el} priority className={scss.typeImg} alt="" />
  ));

  const infos = arr3.map((el, index) => <Inputs key={index} {...el} />);

  return (
    <div className={scss.signUp}>
      <section className={scss.leftPart}>
        <Link href={"/"}>
          <Image src={logo} priority alt="" />
        </Link>
        {toggleScreen ? (
          <section className={scss.reset}>
            <h1>Forget Password</h1>
            <p>Enter Your Mail To Reset</p>
            <main className={scss.main}>
              <div className={`${scss.userInfo} ${value ? scss.active : ""} `}>
                <svg
                  width="18"
                  height="20"
                  viewBox="0 0 23 18"
                  fill="none"
                  className={scss.inputPhoto}
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M0.578857 4.91991C0.242036 7.90886 0.25705 11.3561 0.725741 14.3329C0.985078 15.9801 2.39259 17.2428 4.13002 17.387L5.9458 17.5378C9.73195 17.8521 13.5395 17.8521 17.3257 17.5378L19.1414 17.387C20.8789 17.2428 22.2864 15.9801 22.5457 14.3329C23.0144 11.3561 23.0295 7.90905 22.6926 4.92009C22.6491 4.57357 22.6001 4.22752 22.5457 3.88205C22.2864 2.23491 20.8789 0.972164 19.1414 0.827916L17.3257 0.677162C13.5395 0.362821 9.73195 0.362821 5.9458 0.677163L4.13002 0.827916C2.39259 0.972164 0.985078 2.23491 0.725741 3.88205C0.671357 4.22746 0.622395 4.57345 0.578857 4.91991ZM6.10198 2.39317C9.7842 2.08746 13.4873 2.08746 17.1695 2.39317L18.9853 2.54392C19.8922 2.61922 20.6269 3.27838 20.7623 4.13819C20.7764 4.22748 20.79 4.31681 20.8033 4.40618L14.1172 7.95385C12.574 8.77272 10.6974 8.77272 9.15413 7.95385L2.46812 4.40622C2.48142 4.31683 2.4951 4.22749 2.50916 4.13819C2.64454 3.27838 3.37926 2.61922 4.2862 2.54392L6.10198 2.39317ZM21.024 6.25953C21.2572 8.86363 21.17 11.4874 20.7623 14.0768C20.6269 14.9366 19.8922 15.5957 18.9853 15.671L17.1695 15.8218C13.4873 16.1275 9.7842 16.1275 6.10198 15.8218L4.28621 15.671C3.37926 15.5957 2.64454 14.9366 2.50916 14.0768C2.10147 11.4874 2.01423 8.86366 2.24744 6.25957L8.27828 9.45956C10.3663 10.5675 12.9051 10.5675 14.9931 9.45957L21.024 6.25953Z"
                    fill="#C2C3CB"
                  />
                </svg>
                <input
                  value={value}
                  type="email"
                  placeholder="Enter Your Email"
                  required
                  onChange={(e) => setValue(e.target.value)}
                />
              </div>
              <button type="submit">Verify</button>
              <Link
                href={"/login"}
                onClick={() => setToggleScreen(!toggleScreen)}
                className={scss.backBtn}
              >
                Back To Sign In
              </Link>
            </main>
          </section>
        ) : (
          <main>
            <h1>Sign In To eatly</h1>
            <div>{type} </div>
            <p>or</p>
            <form className={scss.inputs}>
              {infos}{" "}
              <span onClick={() => setToggleScreen(!toggleScreen)}>
                Forgot Password?
              </span>{" "}
              <button type="submit">Sign In</button>
            </form>

            <span>
              Create a new Account{" "}
              <Link href="/signUp" className={scss.logIn}>
                Sign Up
              </Link>
            </span>
          </main>
        )}

        <article>
          <p>Privacy Policy</p>
          <p>Copyright 2022</p>
        </article>
      </section>
      <section className={scss.rightPart}>
        <Image src={imgMain} className={scss.imgMain} priority alt="" />
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

export default LogIn;

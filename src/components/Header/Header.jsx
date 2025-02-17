'use client'

import React, { useEffect, useState } from "react";
import scss from "./Header.module.scss";
import logo from "../Header/assets/logo.svg";
import burger from "../Header/assets/burger.svg";
import Link from "next/link";
import Image from "next/image";
import { arr, links } from "./Header.js";
import { usePathname } from "next/navigation";
import Burger from "./burger/Burger.jsx";

function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  let navs = arr.map(({ title, link }, index) => (
    <nav key={index}>
      <Link className={link === pathname ? scss.active : scss.nonActive} href={link}>
        {title}
      </Link>
    </nav>
  ));

  let aut = links.map(({ title, link }, index) => (
    <div className={scss.aut} key={index}>
      <Link className={scss.btns} href={link}>
        {title}
      </Link>
    </div>
  ));

  useEffect(() => {
    if (open) {
      document.body.style.position = "fixed"; // Фиксируем body
      document.body.style.top = `-${window.scrollY}px`; // Запоминаем текущую прокрутку
      document.body.style.left = "0";
      document.body.style.width = "100%";
    } else {
      const scrollY = document.body.style.top;
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.left = "";
      document.body.style.width = "";
      window.scrollTo(0, parseInt(scrollY || "0") * -1); // Возвращаем прокрутку
    }
  }, [open]);
  

  return (
    <>
      <header className={scss.header}>
        <div className={scss.main}>
          <Link href={"/"}><Image src={logo} alt="jbjbj" priority/></Link>
          <Image 
            onClick={() => setOpen(!open)} 
            className={`${scss.burger} ${open ? scss.burgerActive : ""}`} 
            src={burger} 
            alt="burger"
          />
          <nav>{navs}</nav>
          <aside>{aut}</aside>
        </div>
        <hr />
      </header>
      
      <Burger active={open} />
    </>
  );
}

export default Header;
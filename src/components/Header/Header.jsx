import React from "react";
import scss from "./Header.module.scss";
import logo from "../Header/assets/logo.svg";
import Link from "next/link";
import Image from "next/image";
import { arr, links } from "./Header.js";

function Header() {
  let navs = arr.map(({ title, link }, index) => (
    <nav key={index}>
      <Link className={scss.link} href={{ link }}>
        {title}
      </Link>
    </nav>
  ));

  let aut = links.map(({ title, link }, index) => (
    <div className={scss.aut} key={index}>
      <Link className={scss.btns} href={{ link }}>
        {title}
      </Link>
    </div>
  ));

  return (
   <header className={scss.header}>
     <div className={scss.main}>
      <Link href={"/"}><Image src={logo} alt="" /></Link>
      <nav>{navs}</nav>
      <aside> {aut}</aside>
    </div>
    <hr />
   </header>
  );
}

export default Header;

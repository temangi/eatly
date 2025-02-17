import React , {useEffect}from "react";
import scss from "./Burger.module.scss";
import { arr, links } from "../Header.js";
import Link from "next/link";
import { usePathname } from "next/navigation";

function Burger({ active }) {
  const pathname = usePathname();

  let navs = arr.map(({ title, link }, index) => (
    <nav key={index}>
      <Link
        className={link === pathname ? scss.active : scss.nonActive}
        href={link}
      >
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

  return (
    <section className={`${scss.burger} ${active ? scss.open : ""}`}>
      <main>
        <nav>{navs}</nav>
        <aside>{aut}</aside>
      </main>
    </section>
  );
}

export default Burger;

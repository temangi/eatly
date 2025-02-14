import React from "react";
import Category from "./Category/Category";
import scss from "./MainMenu.module.scss";
import tamak from "@/assets/tamak.svg";
import Image from "next/image";
import search from "../../assets/MainMenu/Search.svg";
import illust from "@/assets/MainMenu/illust.svg";

function MainMenu() {
  return (
    <div className={scss.mainMenu}>
      <Image src={illust} className={scss.illust} alt="" />
      <main className={scss.mainPart}>
        <section className={scss.get}>
          <main>
            <h1>GET 50%</h1>
            <h2>WEEKEND</h2>
          </main>
          <Image className={scss.tamak} src={tamak} alt="cake" />
        </section>
        <section className={scss.bottom}>
          <div>
            <Image src={search} alt="" />
            <input type="text" placeholder="Search" />
          </div>
          <aside>
            <p>Food</p>
            <p>Restaurant</p>
          </aside>
        </section>
      </main>
      <Category />
    </div>
  );
}

export default MainMenu;

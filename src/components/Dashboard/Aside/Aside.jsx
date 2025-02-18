import React from "react";
import scss from "./Aside.module.scss";
import logo from "../../Header/assets/logo.svg";
import Image from "next/image";
import { arr, arr2 } from "../Array";

function Aside() {
  const navigate = arr.map(({ title, img, msg }, index) => {
    return (
      <nav key={index} className={scss.navigate}>
        <div className={scss.img}>{img}</div>
        <span>{title}</span>
        {msg && <p className={scss.message}>{msg}</p>}
      </nav>
    );
  });

  const bottom = arr2.map(({ description, img }, index) => {
    return (
      <div key={index} className={scss.info}>
        <div className={scss.image}>{img}</div>
        <p>{description}</p>
      </div>
    );
  });

  return (
    <div className={scss.aside}>
      <section>
        <header>
          <Image src={logo} alt="" />
        </header>
        <div>{navigate}</div>
      </section>
      <aside>{bottom}</aside>
    </div>
  );
}

export default Aside;

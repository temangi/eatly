import React from "react";
import scss from "./Article.module.scss";

function Article() {
  const arr = [
    {
      title: "Select your items",
      desc: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. ",
    },
    {
      title: "Place your order",
      desc: "Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of 'de Finibus Bonorum et Malorum' (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. ",
    },
  ];
  const seeArr = arr.map(({ title, desc }, index) => (
    <section key={index}>
      <h1>{title}</h1>
      <p>{desc}</p>
    </section>
  ));
  return (
    <section className={scss.article}>
      <header>
        <main>
          <nav>
            <h1>Browse restaurants and menus</h1>
            <p>
              Once you're logged in, you can browse through the list of
              available restaurants on the Eatly website. You can filter by
              cuisine, price, and distance to find the perfect restaurant for
              your needs. Click on a restaurant to view its menu. Once you're
              logged in, you can browse through the list of available
              restaurants on the Eatly website. You can filter by cuisine,
              price, and distance.
            </p>
            <ul>
              <li>It was popularized in the 1960s with the release</li>
              <li>Lorem Ipsum passages, and more recently </li>
            </ul>
          </nav>
          <div>{seeArr}</div>
        </main>
        <aside>
          <h1>Top Articles</h1>

        </aside>
      </header>
    </section>
  );
}

export default Article;

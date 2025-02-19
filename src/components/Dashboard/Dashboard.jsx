import React from "react";
import scss from "./Dashboard.module.scss";
import Aside from "./Aside/Aside";
import Middle from "./Middle/Middle";
import RigthPart from "./RightPart/RigthPart";

function Dashboard() {
  return (
    <section className={scss.dashboardMain}>
      <aside className={scss.main}>
        <h1 className={scss.title}>Our Pricing</h1>
        <div className={scss.dashboard}>
          <Aside />
          <Middle />
          <RigthPart />
        </div>
      </aside>
    </section>
  );
}

export default Dashboard;

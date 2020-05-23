import React, { Fragment } from "react";

import "../Assets/scss/main.scss";
import upgrade from "../Assets/Pictures/upgrade.png";

const Navigation = () => {
  return (
    <article className="go-upgrade">
      <div>
        <img src={upgrade} alt="upgrade" className="upgrade" />
        <h4>
          Upgrade to <span>PRO</span> fro more resources.
        </h4>
        <button className="btn-upgrade">Upgrade</button>
      </div>
    </article>
  );
};

export default Navigation;

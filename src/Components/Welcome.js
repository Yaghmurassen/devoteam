import React, { useState, useEffect, Fragment } from "react";
import { fetchProfiles } from "../Data/queries";
import welcome from "../Assets/Pictures/welcome.svg";
import search from "../Assets/Pictures/search.svg";

import "../Assets/scss/main.scss";

const Welcome = () => {
  return (
    <article className="welcome">
      <article>
        <div>
          <h3>Dashboard</h3>
          <img src={search} alt="search" className="search-icon" />
        </div>
      </article>
      <div>
        <div>
          <h2>Welcome back</h2>
          <p>
            You've learned <span>80%</span> of your goal this week! <br />
            Keep it up and improve your results!
          </p>
        </div>
        <img src={welcome} alt="welcome" className="img-welcome" />
      </div>
    </article>
  );
};

export default Welcome;

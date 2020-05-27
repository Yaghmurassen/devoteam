import React, { useState, useEffect } from "react";
import { fetchProfiles } from "../Data/queries";

import logout from "../Assets/Pictures/logout.png";
import profile from "../Assets/Pictures/user-profile.svg";
import plus from "../Assets/Pictures/icon-plus.svg";

import "../Assets/scss/main.scss";

const Logout = () => {
  const [profil, setProfil] = useState({});

  useEffect(() => {
    setProfil(fetchProfiles());
  }, []);

  return (
    <article className="logout">
      <div className="logout-title">
        <h3>Logout</h3>
        <button className="logout-btn">
          <img src={logout} alt="arrow-right" className="logout-icon" />
        </button>
      </div>
      <div className="user-profile">
        <img src={profile} alt="user-profile" className="user-icon" />
        <button>
          <img src={plus} alt="icon-plus" className="icon-plus" />
        </button>
      </div>
      <div className="user-info">
        <h3>
          {profil.first_name} {profil.last_name}
        </h3>
        <p>{profil.job}</p>
      </div>
    </article>
  );
};

export default Logout;

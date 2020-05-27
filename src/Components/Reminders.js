import React, { useState, useEffect } from "react";
import { fetchReminders } from "../Data/queries";

import "../Assets/scss/main.scss";
import bell from "../Assets/Pictures/notifications.png";
import alert from "../Assets/Pictures/alert.png";

const Reminders = () => {
  const [reminders, setReminders] = useState({});

  useEffect(() => {
    setReminders(fetchReminders());
  }, []);

  console.log(reminders);

  return (
    <article className="reminders">
      <div className="reminders-title">
        <h3>Reminders</h3>
        <button className="reminders-btn">
          <img src={bell} alt="bell" className="reminders-icon" />
        </button>
      </div>
      <div>
        <ul>
          <li>
            <img
              src={alert}
              alt="reminders-alert"
              className="reminders-alert"
            />
            <div>
              <h3>English tahu</h3>
              <p>29 sept 2019, friday</p>
            </div>
          </li>
          <li>
            <img
              src={alert}
              alt="reminders-alert"
              className="reminders-alert"
            />
            <div>
              <h3>English tahu</h3>
              <p>29 sept 2019, friday</p>
            </div>
          </li>
        </ul>
      </div>
    </article>
  );
};

export default Reminders;

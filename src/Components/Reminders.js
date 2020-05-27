import React, { useState, useEffect } from "react";
import { fetchReminders } from "../Data/queries";

import "../Assets/scss/main.scss";
import bell from "../Assets/Pictures/notifications.png";
import alert from "../Assets/Pictures/alert.png";
import message from "../Assets/Pictures/message.png";

// const displayMonths = {
//   0: "January",
//   1: "February",
//   2: "March",
//   3: "April",
//   4: "May",
//   5: "June",
//   6: "July",
//   7: "August",
//   8: "September",
//   9: "October",
//   10: "November",
//   11: "December",
// };

const displayDays = {
  0: "Monday",
  1: "Tuesday",
  2: "Wednesday",
  3: "Thursday",
  4: "Friday",
  5: "Saturday",
  6: "Sunday",
};

const getDate = (timestamp) => {
  let date = new Date(timestamp * 1000).toDateString();
  let arrayDate = date.split(" ");

  let day = displayDays[arrayDate[0]];
  let month = arrayDate[1];
  let number = arrayDate[2];
  let year = arrayDate[3];

  // let months = [
  //   "January",
  //   "February",
  //   "March",
  //   "April",
  //   "May",
  //   "June",
  //   "July",
  //   "August",
  //   "September",
  //   "October",
  //   "November",
  //   "December",
  // ];

  let cleanDate = `${number} ${month} ${year}, ${day}`;
  // console.log("date :::::::", cleanDate);
  return cleanDate;
};

const Reminders = () => {
  const [reminders, setReminders] = useState([]);

  useEffect(() => {
    setReminders(fetchReminders());
    getDate();
  }, []);

  return (
    <article className="reminders">
      <div className="reminders-title">
        <h3>Reminders</h3>
        <button className="reminders-btn">
          <img src={bell} alt="bell" className="reminders-icon" />
        </button>
      </div>
      <div className="reminders-list-container">
        <ul>
          {reminders.map((reminder, index) => {
            return (
              <li key={index}>
                <img
                  src={reminder.type === "alert" ? alert : message}
                  alt="reminders-alert"
                  className="reminders-alert"
                />
                <div>
                  <h3>{reminder.title}</h3>
                  <p>{getDate(reminder.timestamp)}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </article>
  );
};

export default Reminders;

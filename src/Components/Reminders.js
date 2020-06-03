import React, { useState, useEffect } from "react";
import { fetchReminders } from "../Data/queries";

import "../Assets/scss/main.scss";
import bell from "../Assets/Pictures/notifications.png";
import alert from "../Assets/Pictures/alert.png";
import message from "../Assets/Pictures/message.png";

// const displayDays = {
//   0: "Monday",
//   1: "Tuesday",
//   2: "Wednesday",
//   3: "Thursday",
//   4: "Friday",
//   5: "Saturday",
//   6: "Sunday",
// };

const getDate = (timestamp) => {
  let date = new Date(timestamp * 1000).toDateString();
  let arrayDate = date.split(" ");

  let day = arrayDate[0];
  let month = arrayDate[1];
  let number = arrayDate[2];
  let year = arrayDate[3];

  switch (day) {
    case "Mon":
      day = "Monday";
      break;
    case "Tue":
      day = "Tuesday";
      break;
    case "Wed":
      day = "Wednesday";
      break;
    case "Thu":
      day = "Thursday";
      break;
    case "Fri":
      day = "Friday";
      break;
    case "Sat":
      day = "Saturday";
      break;
    case "Sun":
      day = "Sunday";
      break;
    default:
      day = "";
  }

  // let day = arrayDate.map((day) => console.log(displayDays[day[0]]));

  let cleanDate = `${number} ${month} ${year}, ${day}`;
  return cleanDate;
};

const Reminders = () => {
  const [reminders, setReminders] = useState([]);

  useEffect(() => {
    setReminders(fetchReminders());
    getDate();
  }, [reminders]);

  return (
    <article className="reminders">
      <div className="reminders-title">
        <h3>Reminders</h3>
        <button className="reminders-btn">
          <img src={bell} alt="bell" className="reminders-notification" />
        </button>
      </div>
      <div className="reminders-list-container">
        <ul>
          {reminders.map((reminder, index) => {
            return (
              <li key={index}>
                <img
                  src={reminder.type === "alert" ? alert : message}
                  alt="reminders-icon"
                  className={
                    reminder.type === "alert"
                      ? "reminders-icon reminders-icon-alert"
                      : "reminders-icon reminders-icon-message"
                  }
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

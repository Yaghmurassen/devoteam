import React, { useState, useEffect } from "react";
import { fetchReminders } from "../Data/queries";

import "../Assets/scss/main.scss";
import bell from "../Assets/Pictures/notifications.png";
import alert from "../Assets/Pictures/alert.png";
import message from "../Assets/Pictures/message.png";

// const getDate = ({ timestamp }) => {
//   let date = new Date(timestamp * 1000);
//   return date;
// };

const Reminders = () => {
  const [reminders, setReminders] = useState([]);

  useEffect(() => {
    setReminders(fetchReminders());
    // cleanData();
  }, []);
  console.log(reminders);

  // const cleanData = () => {
  //   return reminders.map((reminder) => ({
  //     title: reminder.title,
  //     type: reminder.type,
  //     timestamp: reminder.timestamp,
  //   }));

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
            console.log(reminder)
            return (
              <li key={index}>
                <img
                  src={reminder.type === "alert" ? alert : message}
                  alt="reminders-alert"
                  className="reminders-alert"
                />
                <div>
                  <h3>{reminder.title}</h3>
                  <p>{reminder.timestamp}</p>
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

import React from "react";

import "../Assets/scss/main.scss";
import logo from "../Assets/Pictures/logo.png";
import computer from "../Assets/Pictures/computer.svg";
import folder from "../Assets/Pictures/folder.svg";
import settings from "../Assets/Pictures/edit.svg";
import chat from "../Assets/Pictures/comment.svg";
import calendar from "../Assets/Pictures/calendar.svg";
import ressources from "../Assets/Pictures/ressources.png";

const Navigation = () => {
  return (
    <nav className="navigation">
      <div className="title">
        <img src={logo} alt="logo" />
        <h1>Linglee</h1>
      </div>
      <ul className="nav">
        <li>
          <a href="#dashboard">
            <img src={computer} alt="dashboard" className="nav-icon" />
            <p>Dashboard</p>
          </a>
        </li>
        <li>
          <a href="#classes">
            <img src={folder} alt="classes" className="nav-icon" />
            <p>Classes</p>
          </a>
        </li>
        <li>
          <a href="#ressources">
            <img src={ressources} alt="ressources" className="nav-icon" />
            <p>Ressources</p>
          </a>
        </li>
        <li>
          <a href="#learning-plan">
            <img src={calendar} alt="calendar" className="nav-icon" />
            <p>Learning plan</p>
          </a>
        </li>
        <li>
          <a href="#chat">
            <img src={chat} alt="chat" className="nav-icon" />
            <p>Chat</p>
          </a>
        </li>
        <li>
          <a href="#settings">
            <img src={settings} alt="settings" className="nav-icon" />
            <p>Settings</p>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;

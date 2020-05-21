import React, { Fragment } from "react";
import Courses from "./Components/Courses";

import "./Assets/scss/main.scss";

import folder from "./Assets/Pictures/folder.svg";
import computer from "./Assets/Pictures/computer.svg";
import settings from "./Assets/Pictures/edit.svg";
import chat from "./Assets/Pictures/comment.svg";
import calendar from "./Assets/Pictures/calendar.svg";
import ressources from "./Assets/Pictures/ressources.png";
import logo from "./Assets/Pictures/logo.png";
import upgrade from "./Assets/Pictures/upgrade.png";
import welcome from "./Assets/Pictures/welcome.svg";
import search from "./Assets/Pictures/search.svg";

const App = () => {
  return (
    <Fragment>
      <div className="App grid-container">
        <div className="sidenav">
          <header className="grid-nav">
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
                    <img
                      src={ressources}
                      alt="ressources"
                      className="nav-icon"
                    />
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
            <article className="go-upgrade">
              <div>
                <img src={upgrade} alt="upgrade" className="upgrade" />
                <h4>
                  Upgrade to <span>PRO</span> fro more resources.
                </h4>
                <button className="btn-upgrade">Upgrade</button>
              </div>
            </article>
          </header>
        </div>

        <main className="main grid-main">
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
          <article className="time"></article>
          <Courses />
        </main>

        <aside className="grid-aside">
          <article className="logout"></article>
          <article className="progress"></article>
          <article className="reminders"></article>
        </aside>
      </div>
    </Fragment>
  );
};

export default App;

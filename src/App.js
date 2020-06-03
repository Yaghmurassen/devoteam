import React, { Fragment } from "react";

import Welcome from "./Components/Welcome";
import Navigation from "./Components/Navigation";
import Upgrade from "./Components/Upgrade";
import Courses from "./Components/Courses";
import Time from "./Components/Time";
import Logout from "./Components/Logout";
import Progress from "./Components/Progress";
import Reminders from "./Components/Reminders";

import "./Assets/scss/main.scss";

const App = () => {
  return (
    <Fragment>
      <div className="App grid-container">
        <div className="sidenav">
          <header className="grid-nav">
            <Navigation />
            <Upgrade />
          </header>
        </div>

        <main className="main">
          <div className="grid-main">
            <Welcome />
            <Time />
            <Courses />
          </div>
        </main>

        <aside className="grid-aside">
          <Logout />
          <Progress />
          <Reminders />
        </aside>
      </div>
    </Fragment>
  );
};

export default App;

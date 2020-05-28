import React from "react";
import "../Assets/scss/main.scss";

const Progress = () => {
  return (
    <article className="progress">
      <ul>
        <li>
          <p>B2</p>
          <div>
            <h3>English tahu</h3>
            <p>High intermediate</p>
          </div>
          <div className="line" />
        </li>
        <li>
          <p>C1</p>
          <div>
            <h3>Spanish</h3>
            <p>Advanced</p>
          </div>
          <div className="line" />
        </li>
      </ul>
    </article>
  );
};

export default Progress;

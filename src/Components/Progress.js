import React from "react";
import "../Assets/scss/main.scss";

const Progress = () => {
  return (
    <article className="progress">
      <ul>
        <li>
          <p>B2</p>
          <div>
            <h3>English</h3>
            <p>High intermediate</p>
          </div>
          <progress value="70" max="100">
            70%
          </progress>
        </li>
        <li>
          <p>C1</p>
          <div>
            <h3>Spanish</h3>
            <p>Advanced</p>
          </div>
          <progress value="40" max="100">
            40%
          </progress>
        </li>
      </ul>
    </article>
  );
};

export default Progress;

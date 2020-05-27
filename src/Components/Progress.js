import React, { useState, useEffect } from "react";
import { fetchCourses } from "../Data/queries";

import "../Assets/scss/main.scss";

const Progress = () => {
  const [courses, setCourses] = useState({});

  useEffect(() => {
    setCourses(fetchCourses());
  }, [courses]);

  console.log(courses);

  return (
    <article className="progress">
      <ul>
        <li>
          <p>C1</p>
          <div>
            <h3>English tahu</h3>
            <p>27 october 2019, friday</p>
          </div>
        </li>
      </ul>
    </article>
  );
};

export default Progress;

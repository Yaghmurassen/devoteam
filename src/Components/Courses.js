import React, { useState, useEffect, Fragment } from "react";
// import fetchCourses from "../Data/queries";
import { fetchCourses } from "../Data/queries";

import "../Assets/scss/main.scss";
import arrowRight from "../Assets/Pictures/arrow-right.svg";
import arrowRightWhite from "../Assets/Pictures/arrow-right-white.png";

const getClassNameForCourse = (course) => {
  return course.name.replace(/ /g, "");
};

const Courses = () => {
  const [courses, setCourses] = useState([]);
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    console.log(fetchCourses());
    setCourses(fetchCourses());
    if (courses.length > 3) {
      setScroll(true);
    }
  }, [courses]);

  const loader = () => {
    return <h3>Data is loading....</h3>;
  };

  return (
    <Fragment>
      <section className="courses">
        <article>
          <div className="courses-title">
            <h3>Your courses</h3>
            <div>
              <p>More</p>
              <img src={arrowRight} alt="arrow-right" className="arrow-right" />
            </div>
          </div>
        </article>
        <article
          className={scroll ? "btn-courses btn-courses-scroll" : "btn-courses"}
        >
          {courses.length
            ? courses.map((course) => {
                return (
                  <div
                    className={`btn-course btn-course--${getClassNameForCourse(
                      course
                    )}`}
                  >
                    <p>{course.level}</p>
                    <div>
                      <p className="course-category">{course.category}</p>
                      <h3>{course.name}</h3>
                    </div>
                    <button>
                      <img
                        src={arrowRightWhite}
                        alt="arrow-right"
                        className="arrow-right"
                      />
                    </button>
                  </div>
                );
              })
            : loader}
        </article>
      </section>
    </Fragment>
  );
};

export default Courses;

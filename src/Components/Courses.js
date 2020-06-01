import React, { useState, useEffect, Fragment, useRef } from "react";
import { fetchCourses } from "../Data/queries";

import "../Assets/scss/main.scss";
import arrowRight from "../Assets/Pictures/arrow-right.svg";
import arrowRightWhite from "../Assets/Pictures/arrow-right-white.png";

const getClassNameForCourse = (course) => {
  return course.name.replace(/ /g, "");
};

const getClassNameForCourseLevel = (course) => {
  return course.id;
};

const Courses = () => {
  let coursesList = useRef(null);
  let coursesElement = useRef(null);
  const [courses, setCourses] = useState([]);
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    setCourses(fetchCourses());
    if (courses.length > 3) {
      setScroll(true);
    }
  }, [courses]);

  const loader = () => {
    return <h3>Data is loading....</h3>;
  };

  const scrollCourses = () => {
    coursesElement.current.scrollTo({ left: 0, behavior: "smooth" });
    coursesList.current.scrollTo({ left: 0, behavior: "smooth" });
    console.log("scroooooooolllll");
    // coursesList.current.scrollIntoView({
    //   behavior: "smooth",
    //   block: "start",
    // });
    // coursesElement.current.scrollIntoView({
    //   behavior: "smooth",
    //   block: "start",
    // });
  };

  return (
    <Fragment>
      <section className="courses">
        <article>
          <div className="courses-title">
            <h3>Your courses</h3>
            <button onClick={scrollCourses}>
              <p>More</p>
              <img src={arrowRight} alt="arrow-right" className="arrow-right" />
            </button>
          </div>
        </article>
        <article
          className={scroll ? "btn-courses btn-courses-scroll" : "btn-courses"}
          ref={(el) => (coursesList = el)}
        >
          {courses.length
            ? courses.map((course, index) => {
                return (
                  <div
                    key={index}
                    className={`btn-course btn-course--${getClassNameForCourse(
                      course
                    )}`}
                    ref={(el) => (coursesElement = el)}
                  >
                    <p
                      className={`btn-course--${getClassNameForCourseLevel(
                        course
                      )}`}
                    >
                      {course.level}
                    </p>
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

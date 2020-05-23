import React, { useState, useEffect, useCallback, Fragment } from "react";
import { fetchTimes } from "../Data/queries";
import Chart from "react-apexcharts";

import "../Assets/scss/main.scss";
import arrowSort from "../Assets/Pictures/arrow-sort.png";

const displayDays = {
  0: "Sun",
  1: "Mon",
  2: "Tue",
  3: "Wed",
  4: "Thu",
  5: "Fri",
  6: "Sat",
};

const getDays = (times) =>
  times.map(({ day_of_week }) => displayDays[day_of_week]);

const getTimes = (times) => {
  times.map(({ time_spent_percentage }) => {
    let timeSpent = time_spent_percentage;
    return timeSpent;
  });
};

const Time = () => {
  const [times, setTime] = useState([]);
  const [series, setSeries] = useState([
    {
      name: "",
      data: [],
    },
    {
      name: "",
      data: [],
    },
    {
      name: "",
      data: [],
    },
    {
      name: "",
      data: [],
    },
  ]);
  const [options, setOptions] = useState({
    chart: {
      type: "bar",
      //   height: 350,
      stacked: true,
      stackType: "100%",
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          legend: {
            position: "bottom",
            offsetX: -10,
            offsetY: 0,
          },
        },
      },
    ],
    xaxis: {
      categories: [],
      type: "function",
    },
    // fill: {
    //   opacity: 1,
    // },
  });

  useEffect(() => {
    setTime(fetchTimes());
    setOptions({ ...options, xaxis: { categories: getDays(times) } });
    // setSeries({...options, );
    console.log(times, options, getDays(times));
  }, [times]);

  return (
    <Fragment>
      <article className="time">
        <div className="time-title">
          <h3>Time spent on learning</h3>
          <button className="time-sort">
            <p>Last week</p>
            <img src={arrowSort} alt="arrow-sort" />
          </button>
        </div>
        <Chart options={options} series={series} type="bar" />
      </article>
    </Fragment>
  );
};

export default Time;

import React, { useState, useEffect, useCallback, Fragment } from "react";
import { fetchTime } from "../Data/queries";
import Chart from "react-apexcharts";

import "../Assets/scss/main.scss";

const displayDays = {
  0: "Sun",
  1: "Mon",
  2: "Tue",
  3: "Wed",
  4: "Thu",
  5: "Fri",
  6: "Sat",
};

////// Objet : pas de notion d'index, seulement de clef

const getDays = (times) =>
  times.map(({ day_of_week }) => displayDays[day_of_week]);

const getTimes = (times) => {
  times.map((element) => {
    let timeSpent = element.time_spent_percentage;
    return timeSpent;
  });
};

const Time = () => {
  const [time, setTime] = useState([]);
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
    setTime(fetchTime());
    setOptions({ ...options, xaxis: { categories: getDays(time) } });
    // setSeries({...options, );
    console.log(time, options, getDays(time));
  }, [time]);

  return (
    <Fragment>
      <article className="time">
        <h3>Time spent on learning</h3>
        <Chart options={options} series={series} type="bar" />
      </article>
    </Fragment>
  );
};

export default Time;

import React, { useState, useEffect, Fragment } from "react";
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

const getTimeSeries = (times) => {
  const timeSeries = [];
  times.forEach((time) => {
    const timeSpentPercentages = time.time_spent_percentage[0];
    let timeSpentPercentageKeys = Object.keys(timeSpentPercentages);
    timeSpentPercentageKeys.forEach((key) => {
      const existingTimeSeries = timeSeries.find(
        (timeSerie) => timeSerie.name === key
      );
      if (existingTimeSeries) {
        existingTimeSeries.data.push(timeSpentPercentages[key]);
      } else {
        timeSeries.push({ name: key, data: [timeSpentPercentages[key]] });
      }
    });
  });
  return timeSeries;
};

const Time = () => {
  const [times, setTime] = useState([]);
  const [series, setSeries] = useState([]);

  const [options, setOptions] = useState({
    chart: {
      type: "bar",
      height: "100%",
      stacked: true,
      stackType: "100%",
    },
    responsive: [
      {
        breakpoint: 992,
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
  });

  useEffect(() => {
    const times = fetchTimes();
    setTime(times);
    setOptions({ ...options, xaxis: { categories: getDays(times) } });
    setSeries(getTimeSeries(times));
  }, [times]);

  return (
    <Fragment>
      <article className="time">
        <div className="vide" />
        <div>
          <div className="time-title">
            <h3>Time spent on learning</h3>
            <button className="time-sort">
              <p>Last week</p>
              <img src={arrowSort} alt="arrow-sort" />
            </button>
          </div>
          <Chart
            options={options}
            series={series}
            type="bar"
            className="chart"
          />
        </div>
      </article>
    </Fragment>
  );
};

export default Time;

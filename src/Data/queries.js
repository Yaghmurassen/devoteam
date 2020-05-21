import courses from "../Data/courses.json";
import profile from "../Data/profile.json";
import reminders from "../Data/reminders.json";
import time from "../Data/time_spent.json";

const fetchCourses = () => {
  return courses.data;
};

const fetchProfil = () => {
  return profile.data;
};

const fetchReminders = () => {
  return reminders.data;
};

const fetchTime = () => {
  return time.data;
};

export { fetchCourses, fetchProfil, fetchReminders, fetchTime };

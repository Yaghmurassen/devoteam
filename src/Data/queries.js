import courses from "../Data/courses.json";
import profile from "../Data/profile.json";
import reminders from "../Data/reminders.json";
import time from "../Data/time_spent.json";

const fetchCourses = () => {
  return courses.data;
};

const fetchProfiles = () => {
  return profile.data[0];
};

const fetchReminders = () => {
  return reminders.data;
};

const fetchTimes = () => {
  return time.data;
};

export { fetchCourses, fetchProfiles, fetchReminders, fetchTimes };

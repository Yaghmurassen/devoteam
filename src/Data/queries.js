import courses from "../Data/courses.json";

const fetchCourses = () => {
  return courses.data;
};

// const fetchProfil = () => {
//   return profil;
// };

// const fetchReminders = () => {
//   return reminders;
// };

// const fetchTime = () => {
//   return time;
// };

export { fetchCourses };

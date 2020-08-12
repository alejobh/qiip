import { SECTIONS } from "./constants.js";

const formatDate = (date) => {
  let month = date.getMonth() + 1;
  let day = date.getDate();
  if (month < 10) {
    month = `0${month}`;
  }
  if (day < 10) {
    day = `0${day}`;
  }
  return `${day}-${month}-${date.getFullYear()}`;
};

const sortData = (a, b) => b.timestamp - a.timestamp;

export function toggleClass(element, className) {
  element.classList.toggle(className);
}

export function setProfileData(profile) {
  console.log(profile);
  const sorted = profile.data.sort(sortData);
  const data = sorted[0];
  const name = data.userName;
  const dob = new Date(data.userDob);
  const height = data.meta.height;

  document.getElementById(SECTIONS.profile.name).innerHTML = name;
  document.getElementById(SECTIONS.profile.dob).innerHTML = formatDate(dob);
  document.getElementById(
    SECTIONS.profile.height
  ).innerHTML = `Height: ${height}`;
}

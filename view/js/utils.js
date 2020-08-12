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

function createHeaders(header) {
  const th1 = document.createElement("th");
  const th2 = document.createElement("th");
  const th3 = document.createElement("th");
  const th4 = document.createElement("th");
  const th5 = document.createElement("th");
  th1.innerHTML = "SL";
  th2.innerHTML = "Date";
  th3.innerHTML = "Diagnosis";
  th4.innerHTML = "Weight";
  th5.innerHTML = "Doctor";
  header.appendChild(th1);
  header.appendChild(th2);
  header.appendChild(th3);
  header.appendChild(th4);
  header.appendChild(th5);
}

function setProfileTable(data) {
  const header = document.getElementById(SECTIONS.profile.table.header);
  const body = document.getElementById(SECTIONS.profile.table.body);

  createHeaders(header);
  header.appendChild(th);
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

  setProfileTable(sorted);
}

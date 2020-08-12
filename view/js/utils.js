import { SECTIONS } from "./constants.js";
import { headers } from "./script.js";

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

function createHeaders(thead) {
  headers.forEach((header) => {
    const th = document.createElement("th");
    th.innerHTML = header;
    thead.appendChild(th);
  });
}

function createBody(body, data) {
  data.forEach((el) => {
    const tr = document.createElement("tr");
    const td1 = document.createElement("td");
    const td2 = document.createElement("td");
    const td3 = document.createElement("td");
    const td4 = document.createElement("td");
    const td5 = document.createElement("td");
    td1.innerHTML = el.id;
    td2.innerHTML = formatDate(new Date(el.timestamp));
    td3.innerHTML = el.diagnosis.name;
    td4.innerHTML = el.meta.weight;
    td5.innerHTML = el.doctor.name;
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);
    tr.appendChild(td5);
    body.appendChild(tr);
  });
}

function setProfileTable(data) {
  const header = document.getElementById(SECTIONS.profile.table.header);
  const body = document.getElementById(SECTIONS.profile.table.body);

  createHeaders(header);
  createBody(body, data);
  header.appendChild(th);
}

export function setProfileData(profile) {
  const sorted = profile.data.sort(sortData);
  const data = sorted[0];
  const name = data.userName;
  const dob = data.userDob;
  const height = data.meta.height;

  document.getElementById(SECTIONS.profile.name).innerHTML = name;
  document.getElementById(SECTIONS.profile.dob).innerHTML = dob;
  document.getElementById(
    SECTIONS.profile.height
  ).innerHTML = `Height: ${height}`;

  setProfileTable(sorted);
}

export function resetProfileTable() {
  const header = document.getElementById(SECTIONS.profile.table.header);
  const body = document.getElementById(SECTIONS.profile.table.body);
  header.innerHTML = "";
  body.innerHTML = "";
}

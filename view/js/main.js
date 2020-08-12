// load proccess
import { SECTIONS, ELEMENTS } from "./constants.js";
import { toggleClass } from "./utils.js";
import { getMedicalRecord } from "./service.js";

const loader = document.getElementById(SECTIONS.loader);
const profileContainer = document.getElementById(SECTIONS.profile);
const userSelector = document.getElementById(ELEMENTS.userSelector);
const submitBtn = document.getElementById(ELEMENTS.submit);

let id = null;

userSelector.addEventListener("change", async function () {
  id = this.value;
});

submitBtn.addEventListener("click", async function () {
  if (id) {
    toggleClass(loader, "hide");
    const response = await getMedicalRecord(id);
    const data = await response.json();
    toggleClass(loader, "hide");
    toggleClass(profileContainer, "hide");
  }
});

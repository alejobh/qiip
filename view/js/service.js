import { QUERY_PARAMS } from "./constants.js";

const BASE_URL = "https://jsonmock.hackerrank.com/api/medical_records";

export const getMedicalRecord = (id) => {
  console.log("here", id);
  fetch(`${BASE_URL}?${new URLSearchParams({ [QUERY_PARAMS.id]: id })}`);
};

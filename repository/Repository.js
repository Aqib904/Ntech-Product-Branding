import axios from "axios";
const baseDomain =
  "https://uat.api.vehya.com/api/contractor-service/v1/residentialJourney/";
const baseURL = `${baseDomain}`;

let axiosObj;
axiosObj = axios.create({
  baseURL,
  headers: { "Content-Type": "application/json" },
});
export default axiosObj;

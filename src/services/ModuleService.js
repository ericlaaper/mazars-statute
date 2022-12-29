import axios from "axios";
export default {
  getStatus(payload) {
    const token = localStorage.getItem("token");
    return axios.post("/modulesInfoStatute", payload, {
      baseURL: process.env.VUE_APP_API_URL,
      headers: {
        Accept: "Application/json",
        Authorization: `Bearer ` + token,
      },
    });
  },
  getVis(payload) {
    const token = localStorage.getItem("token");
    return axios.post("/modulesVisStatute", payload, {
      baseURL: process.env.VUE_APP_API_URL,
      headers: {
        Accept: "Application/json",
        Authorization: `Bearer ` + token,
      },
    });
  },
  getDate(payload) {
    const token = localStorage.getItem("token");
    return axios.post("/modulesDateStatute", payload, {
      baseURL: process.env.VUE_APP_API_URL,
      headers: {
        Accept: "Application/json",
        Authorization: `Bearer ` + token,
      },
    });
  },
};

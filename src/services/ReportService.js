import axios from "axios";
export default {
  getReportA(payload) {
    const token = localStorage.getItem("token");
    return axios.post("/reportStatuteA", payload, {
      baseURL: process.env.VUE_APP_API_URL,
      headers: {
        Accept: "Application/json",
        Authorization: `Bearer ` + token,
      },
    });
  },
  getReportB(payload) {
    const token = localStorage.getItem("token");
    return axios.post("/reportStatuteB", payload, {
      baseURL: process.env.VUE_APP_API_URL,
      headers: {
        Accept: "Application/json",
        Authorization: `Bearer ` + token,
      },
    });
  },
  getReportC(payload) {
    const token = localStorage.getItem("token");
    return axios.post("/reportStatuteC", payload, {
      baseURL: process.env.VUE_APP_API_URL,
      headers: {
        Accept: "Application/json",
        Authorization: `Bearer ` + token,
      },
    });
  },
  getReportD(payload) {
    const token = localStorage.getItem("token");
    return axios.post("/reportStatuteD", payload, {
      baseURL: process.env.VUE_APP_API_URL,
      headers: {
        Accept: "Application/json",
        Authorization: `Bearer ` + token,
      },
    });
  },
  getReportE(payload) {
    const token = localStorage.getItem("token");
    return axios.post("/reportStatuteE", payload, {
      baseURL: process.env.VUE_APP_API_URL,
      headers: {
        Accept: "Application/json",
        Authorization: `Bearer ` + token,
      },
    });
  },
  getReportF(payload) {
    const token = localStorage.getItem("token");
    return axios.post("/reportStatuteF", payload, {
      baseURL: process.env.VUE_APP_API_URL,
      headers: {
        Accept: "Application/json",
        Authorization: `Bearer ` + token,
      },
    });
  },
  getReportG(payload) {
    const token = localStorage.getItem("token");
    return axios.post("/reportStatuteG", payload, {
      baseURL: process.env.VUE_APP_API_URL,
      headers: {
        Accept: "Application/json",
        Authorization: `Bearer ` + token,
      },
    });
  },
  getReportH(payload) {
    const token = localStorage.getItem("token");
    return axios.post("/reportStatuteH", payload, {
      baseURL: process.env.VUE_APP_API_URL,
      headers: {
        Accept: "Application/json",
        Authorization: `Bearer ` + token,
      },
    });
  },
  getReportI(payload) {
    const token = localStorage.getItem("token");
    return axios.post("/reportStatuteI", payload, {
      baseURL: process.env.VUE_APP_API_URL,
      headers: {
        Accept: "Application/json",
        Authorization: `Bearer ` + token,
      },
    });
  },
  getReportJ(payload) {
    const token = localStorage.getItem("token");
    return axios.post("/reportStatuteJ", payload, {
      baseURL: process.env.VUE_APP_API_URL,
      headers: {
        Accept: "Application/json",
        Authorization: `Bearer ` + token,
      },
    });
  },
  getReportK(payload) {
    const token = localStorage.getItem("token");
    return axios.post("/reportStatuteK", payload, {
      baseURL: process.env.VUE_APP_API_URL,
      headers: {
        Accept: "Application/json",
        Authorization: `Bearer ` + token,
      },
    });
  },
  getReportL(payload) {
    const token = localStorage.getItem("token");
    return axios.post("/reportStatuteL", payload, {
      baseURL: process.env.VUE_APP_API_URL,
      headers: {
        Accept: "Application/json",
        Authorization: `Bearer ` + token,
      },
    });
  },
  getReportM(payload) {
    const token = localStorage.getItem("token");
    return axios.post("/reportStatuteM", payload, {
      baseURL: process.env.VUE_APP_API_URL,
      headers: {
        Accept: "Application/json",
        Authorization: `Bearer ` + token,
      },
    });
  },
  getReportN(payload) {
    const token = localStorage.getItem("token");
    return axios.post("/reportStatuteN", payload, {
      baseURL: process.env.VUE_APP_API_URL,
      headers: {
        Accept: "Application/json",
        Authorization: `Bearer ` + token,
      },
    });
  },
};

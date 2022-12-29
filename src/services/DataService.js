import axios from "axios";
export default {
  getDataA(payload) {
    const token = localStorage.getItem("token");
    return axios.post("/aDataAppStatute", payload, {
      baseURL: process.env.VUE_APP_API_URL,
      headers: {
        Accept: "Application/json",
        Authorization: `Bearer ` + token,
      },
    });
  },
  getDataB(payload) {
    const token = localStorage.getItem("token");
    return axios.post("/bDataAppStatute", payload, {
      baseURL: process.env.VUE_APP_API_URL,
      headers: {
        Accept: "Application/json",
        Authorization: `Bearer ` + token,
      },
    });
  },

  getDataC(payload) {
    const token = localStorage.getItem("token");
    return axios.post("/cDataAppStatute", payload, {
      baseURL: process.env.VUE_APP_API_URL,
      headers: {
        Accept: "Application/json",
        Authorization: `Bearer ` + token,
      },
    });
  },
  getDataD(payload) {
    const token = localStorage.getItem("token");
    return axios.post("/dDataAppStatute", payload, {
      baseURL: process.env.VUE_APP_API_URL,
      headers: {
        Accept: "Application/json",
        Authorization: `Bearer ` + token,
      },
    });
  },
  getDataE(payload) {
    const token = localStorage.getItem("token");
    return axios.post("/eDataAppStatute", payload, {
      baseURL: process.env.VUE_APP_API_URL,
      headers: {
        Accept: "Application/json",
        Authorization: `Bearer ` + token,
      },
    });
  },
  getDataF(payload) {
    const token = localStorage.getItem("token");
    return axios.post("/fDataAppStatute", payload, {
      baseURL: process.env.VUE_APP_API_URL,
      headers: {
        Accept: "Application/json",
        Authorization: `Bearer ` + token,
      },
    });
  },
  getDataG(payload) {
    const token = localStorage.getItem("token");
    return axios.post("/gDataAppStatute", payload, {
      baseURL: process.env.VUE_APP_API_URL,
      headers: {
        Accept: "Application/json",
        Authorization: `Bearer ` + token,
      },
    });
  },
  getDataH(payload) {
    const token = localStorage.getItem("token");
    return axios.post("/hDataAppStatute", payload, {
      baseURL: process.env.VUE_APP_API_URL,
      headers: {
        Accept: "Application/json",
        Authorization: `Bearer ` + token,
      },
    });
  },
  getDataI(payload) {
    const token = localStorage.getItem("token");
    return axios.post("/iDataAppStatute", payload, {
      baseURL: process.env.VUE_APP_API_URL,
      headers: {
        Accept: "Application/json",
        Authorization: `Bearer ` + token,
      },
    });
  },
  getDataJ(payload) {
    const token = localStorage.getItem("token");
    return axios.post("/jDataAppStatute", payload, {
      baseURL: process.env.VUE_APP_API_URL,
      headers: {
        Accept: "Application/json",
        Authorization: `Bearer ` + token,
      },
    });
  },
  getDataK(payload) {
    const token = localStorage.getItem("token");
    return axios.post("/kDataAppStatute", payload, {
      baseURL: process.env.VUE_APP_API_URL,
      headers: {
        Accept: "Application/json",
        Authorization: `Bearer ` + token,
      },
    });
  },
  getDataL(payload) {
    const token = localStorage.getItem("token");
    return axios.post("/lDataAppStatute", payload, {
      baseURL: process.env.VUE_APP_API_URL,
      headers: {
        Accept: "Application/json",
        Authorization: `Bearer ` + token,
      },
    });
  },
  getDataM(payload) {
    const token = localStorage.getItem("token");
    return axios.post("/mDataAppStatute", payload, {
      baseURL: process.env.VUE_APP_API_URL,
      headers: {
        Accept: "Application/json",
        Authorization: `Bearer ` + token,
      },
    });
  },
  getDataN(payload) {
    const token = localStorage.getItem("token");
    return axios.post("/nDataAppStatute", payload, {
      baseURL: process.env.VUE_APP_API_URL,
      headers: {
        Accept: "Application/json",
        Authorization: `Bearer ` + token,
      },
    });
  },
  saveDataA(payload) {
    const token = localStorage.getItem("token");
    return axios.post("/aUpdateAppStatute", payload, {
      baseURL: process.env.VUE_APP_API_URL,
      headers: {
        Accept: "Application/json",
        Authorization: `Bearer ` + token,
      },
    });
  },
  saveDataB(payload) {
    const token = localStorage.getItem("token");
    return axios.post("/bUpdateAppStatute", payload, {
      baseURL: process.env.VUE_APP_API_URL,
      headers: {
        Accept: "Application/json",
        Authorization: `Bearer ` + token,
      },
    });
  },
  saveDataC(payload) {
    const token = localStorage.getItem("token");
    return axios.post("/cUpdateAppStatute", payload, {
      baseURL: process.env.VUE_APP_API_URL,
      headers: {
        Accept: "Application/json",
        Authorization: `Bearer ` + token,
      },
    });
  },
  saveDataD(payload) {
    const token = localStorage.getItem("token");
    return axios.post("/dUpdateAppStatute", payload, {
      baseURL: process.env.VUE_APP_API_URL,
      headers: {
        Accept: "Application/json",
        Authorization: `Bearer ` + token,
      },
    });
  },
  saveDataE(payload) {
    const token = localStorage.getItem("token");
    return axios.post("/eUpdateAppStatute", payload, {
      baseURL: process.env.VUE_APP_API_URL,
      headers: {
        Accept: "Application/json",
        Authorization: `Bearer ` + token,
      },
    });
  },
  saveDataF(payload) {
    const token = localStorage.getItem("token");
    return axios.post("/fUpdateAppStatute", payload, {
      baseURL: process.env.VUE_APP_API_URL,
      headers: {
        Accept: "Application/json",
        Authorization: `Bearer ` + token,
      },
    });
  },
  saveDataG(payload) {
    const token = localStorage.getItem("token");
    return axios.post("/gUpdateAppStatute", payload, {
      baseURL: process.env.VUE_APP_API_URL,
      headers: {
        Accept: "Application/json",
        Authorization: `Bearer ` + token,
      },
    });
  },
  saveDataH(payload) {
    const token = localStorage.getItem("token");
    return axios.post("/hUpdateAppStatute", payload, {
      baseURL: process.env.VUE_APP_API_URL,
      headers: {
        Accept: "Application/json",
        Authorization: `Bearer ` + token,
      },
    });
  },
  saveDataI(payload) {
    const token = localStorage.getItem("token");
    return axios.post("/iUpdateAppStatute", payload, {
      baseURL: process.env.VUE_APP_API_URL,
      headers: {
        Accept: "Application/json",
        Authorization: `Bearer ` + token,
      },
    });
  },
  saveDataJ(payload) {
    const token = localStorage.getItem("token");
    return axios.post("/jUpdateAppStatute", payload, {
      baseURL: process.env.VUE_APP_API_URL,
      headers: {
        Accept: "Application/json",
        Authorization: `Bearer ` + token,
      },
    });
  },
  saveDataK(payload) {
    const token = localStorage.getItem("token");
    return axios.post("/kUpdateAppStatute", payload, {
      baseURL: process.env.VUE_APP_API_URL,
      headers: {
        Accept: "Application/json",
        Authorization: `Bearer ` + token,
      },
    });
  },
  saveDataL(payload) {
    const token = localStorage.getItem("token");
    return axios.post("/lUpdateAppStatute", payload, {
      baseURL: process.env.VUE_APP_API_URL,
      headers: {
        Accept: "Application/json",
        Authorization: `Bearer ` + token,
      },
    });
  },
  saveDataM(payload) {
    const token = localStorage.getItem("token");
    return axios.post("/mUpdateAppStatute", payload, {
      baseURL: process.env.VUE_APP_API_URL,
      headers: {
        Accept: "Application/json",
        Authorization: `Bearer ` + token,
      },
    });
  },
  saveDataN(payload) {
    const token = localStorage.getItem("token");
    return axios.post("/nUpdateAppStatute", payload, {
      baseURL: process.env.VUE_APP_API_URL,
      headers: {
        Accept: "Application/json",
        Authorization: `Bearer ` + token,
      },
    });
  },
};

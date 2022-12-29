import axios from "axios";
export default {
  getVisA(payload) {
    const token = localStorage.getItem("token");
    return axios.post("/aVisAppStatute", payload, {
      baseURL: process.env.VUE_APP_API_URL,
      headers: {
        Accept: "Application/json",
        Authorization: `Bearer ` + token,
      },
    });
  },
  getVisB(payload) {
    const token = localStorage.getItem("token");
    return axios.post("/bVisAppStatute", payload, {
      baseURL: process.env.VUE_APP_API_URL,
      headers: {
        Accept: "Application/json",
        Authorization: `Bearer ` + token,
      },
    });
  },
  getVisC(payload) {
    const token = localStorage.getItem("token");
    return axios.post("/cVisAppStatute", payload, {
      baseURL: process.env.VUE_APP_API_URL,
      headers: {
        Accept: "Application/json",
        Authorization: `Bearer ` + token,
      },
    });
  },
  getVisD(payload) {
    const token = localStorage.getItem("token");
    return axios.post("/dVisAppStatute", payload, {
      baseURL: process.env.VUE_APP_API_URL,
      headers: {
        Accept: "Application/json",
        Authorization: `Bearer ` + token,
      },
    });
  },
  getVisE(payload) {
    const token = localStorage.getItem("token");
    return axios.post("/eVisAppStatute", payload, {
      baseURL: process.env.VUE_APP_API_URL,
      headers: {
        Accept: "Application/json",
        Authorization: `Bearer ` + token,
      },
    });
  },
  getVisF(payload) {
    const token = localStorage.getItem("token");
    return axios.post("/fVisAppStatute", payload, {
      baseURL: process.env.VUE_APP_API_URL,
      headers: {
        Accept: "Application/json",
        Authorization: `Bearer ` + token,
      },
    });
  },
  getVisG(payload) {
    const token = localStorage.getItem("token");
    return axios.post("/gVisAppStatute", payload, {
      baseURL: process.env.VUE_APP_API_URL,
      headers: {
        Accept: "Application/json",
        Authorization: `Bearer ` + token,
      },
    });
  },
  getVisH(payload) {
    const token = localStorage.getItem("token");
    return axios.post("/hVisAppStatute", payload, {
      baseURL: process.env.VUE_APP_API_URL,
      headers: {
        Accept: "Application/json",
        Authorization: `Bearer ` + token,
      },
    });
  },
  getVisI(payload) {
    const token = localStorage.getItem("token");
    return axios.post("/iVisAppStatute", payload, {
      baseURL: process.env.VUE_APP_API_URL,
      headers: {
        Accept: "Application/json",
        Authorization: `Bearer ` + token,
      },
    });
  },
  getVisJ(payload) {
    const token = localStorage.getItem("token");
    return axios.post("/jVisAppStatute", payload, {
      baseURL: process.env.VUE_APP_API_URL,
      headers: {
        Accept: "Application/json",
        Authorization: `Bearer ` + token,
      },
    });
  },
  getVisK(payload) {
    const token = localStorage.getItem("token");
    return axios.post("/kVisAppStatute", payload, {
      baseURL: process.env.VUE_APP_API_URL,
      headers: {
        Accept: "Application/json",
        Authorization: `Bearer ` + token,
      },
    });
  },
  getVisL(payload) {
    const token = localStorage.getItem("token");
    return axios.post("/lVisAppStatute", payload, {
      baseURL: process.env.VUE_APP_API_URL,
      headers: {
        Accept: "Application/json",
        Authorization: `Bearer ` + token,
      },
    });
  },
  getVisM(payload) {
    const token = localStorage.getItem("token");
    return axios.post("/nVisAppStatute", payload, {
      baseURL: process.env.VUE_APP_API_URL,
      headers: {
        Accept: "Application/json",
        Authorization: `Bearer ` + token,
      },
    });
  },
  getVisN(payload) {
    const token = localStorage.getItem("token");
    return axios.post("/nVisAppStatute", payload, {
      baseURL: process.env.VUE_APP_API_URL,
      headers: {
        Accept: "Application/json",
        Authorization: `Bearer ` + token,
      },
    });
  },
};

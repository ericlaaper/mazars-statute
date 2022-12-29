import * as API from "@/services/API";

export default {
  async login(payload) {
    return API.apiClient.post("/loginStatuteEmail", payload);
  },
  loginB(payload) {
    return API.apiClient.post("/loginStatuteCode", payload);
  },
  loginFam(payload) {
    return API.apiClient.post("/loginStatuteFamily", payload);
  },
  logout(payload) {
    return API.apiClient.post("/logoutStatute", payload);
  },
  getAuthUser() {
    return API.apiClient.get("/api/auth/auth");
  },
  getInfo(payload) {
    return API.apiClient.post("/getInfoChart", payload);
  },
};

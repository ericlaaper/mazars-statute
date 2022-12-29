import { getError } from "@/plugins/helpers";
import DataService from "@/services/DataService";
export const namespaced = true;

export const state = {
  moduleData: {
    id: 0,
    data_a: "",
    data_b: "",
    data_c: "",
    data_d: "",
    data_e: "",
    data_f: "",
    data_g: "",
    data_h: "",
    data_i: "",
    data_j: "",
    data_k: "",
    data_l: "",
    ready_a: false,
    ready_b: false,
    ready_c: false,
    ready_d: false,
    step: 0,
  },
  loading: false,
  error: null,
  saving: false,
};

export const mutations = {
  SET_MODULES(state, moduleData) {
    state.moduleData = moduleData;
  },
  SET_LOADING(state, loading) {
    state.loading = loading;
  },
  SET_SAVING(state, saving) {
    state.saving = saving;
  },
  SET_ERROR(state, error) {
    state.error = error;
  },
  SET_DATA(state, moduleData) {
    state.moduleData = moduleData;
  },
  stepUp(state) {
    state.moduleData.step++;
  },
  stepDown(state) {
    state.moduleData.step--;
  },
  stepUpNr(state, num) {
    state.moduleData.step += num;
  },
  stepDownNr(state, num) {
    state.moduleData.step -= num;
  },
  update_step(state, step) {
    state.moduleData.step = step;
  },
  update_ready_a(state, ready_a) {
    state.moduleData.ready_a = ready_a;
  },
  update_ready_b(state, ready_b) {
    state.moduleData.ready_b = ready_b;
  },
  update_ready_c(state, ready_c) {
    state.moduleData.ready_c = ready_c;
  },
  update_ready_d(state, ready_d) {
    state.moduleData.ready_d = ready_d;
  },
  update_data_a(state, data_a) {
    state.moduleData.data_a = data_a;
  },
  update_data_b(state, data_b) {
    state.moduleData.data_b = data_b;
  },
  update_data_c(state, data_c) {
    state.moduleData.data_c = data_c;
  },
  update_data_d(state, data_d) {
    state.moduleData.data_d = data_d;
  },
  update_data_e(state, data_e) {
    state.moduleData.data_e = data_e;
  },
  update_data_f(state, data_f) {
    state.moduleData.data_f = data_f;
  },
  update_data_g(state, data_g) {
    state.moduleData.data_g = data_g;
  },
  update_data_h(state, data_h) {
    state.moduleData.data_h = data_h;
  },
  update_data_i(state, data_i) {
    state.moduleData.data_i = data_i;
  },
  update_data_j(state, data_j) {
    state.moduleData.data_j = data_j;
  },
  update_data_k(state, data_k) {
    state.moduleData.data_k = data_k;
  },
  update_data_l(state, data_l) {
    state.moduleData.data_l = data_l;
  },
};

export const actions = {
  async getModulesData({ commit }, payload) {
    commit("SET_LOADING", true);
    try {
      const response = await DataService.getDataE(payload);
      commit("SET_DATA", response.data.data);
      commit("SET_LOADING", false);
      commit("SET_ERROR", response);
    } catch (error) {
      commit("SET_LOADING", false);
      commit("SET_ERROR", getError(error));
    }
  },
  async setModulesData({ commit }) {
    commit("SET_SAVING", true);
    try {
      const response = await DataService.saveDataE(state.moduleData);
      commit("SET_SAVING", false);
      commit("SET_ERROR", response);
    } catch (error) {
      commit("SET_SAVING", false);
      commit("SET_ERROR", getError(error));
    }
  },
};
export const getters = {
  moduleData: (state) => {
    return state.moduleData;
  },
  id: (state) => {
    return state.moduleData.id;
  },
  step: (state) => {
    return state.moduleData.step;
  },
  ready_a: (state) => {
    return state.moduleData.ready_a;
  },
  ready_b: (state) => {
    return state.moduleData.ready_b;
  },
  ready_c: (state) => {
    return state.moduleData.ready_c;
  },
  ready_d: (state) => {
    return state.moduleData.ready_d;
  },
  data_a: (state) => {
    return state.moduleData.data_a;
  },
  data_b: (state) => {
    return state.moduleData.data_b;
  },
  data_c: (state) => {
    return state.moduleData.data_c;
  },
  data_d: (state) => {
    return state.moduleData.data_d;
  },
  data_e: (state) => {
    return state.moduleData.data_e;
  },
  data_f: (state) => {
    return state.moduleData.data_f;
  },
  data_g: (state) => {
    return state.moduleData.data_g;
  },
  data_h: (state) => {
    return state.moduleData.data_h;
  },
  data_i: (state) => {
    return state.moduleData.data_i;
  },
  data_j: (state) => {
    return state.moduleData.data_j;
  },
  data_k: (state) => {
    return state.moduleData.data_k;
  },
  data_l: (state) => {
    return state.moduleData.data_l;
  },
  loading: (state) => {
    return state.loading;
  },
};

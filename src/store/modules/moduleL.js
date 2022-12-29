import { getError } from "@/plugins/helpers";
import DataService from "@/services/DataService";
export const namespaced = true;

export const state = {
  moduleData: {
    id: 0,
    sl_a: 0,
    sl_b: 0,
    sl_c: 0,
    sl_d: 0,
    sl_e: 0,
    sl_f: 0,
    sl_g: 0,
    sl_h: 0,
    sl_i: 0,
    sl_j: 0,
    sl_k: 0,
    sl_l: 0,
    sl_m: 0,
    sl_n: 0,
    sl_o: 0,
    sl_p: 0,
    sl_q: 0,
    sl_r: 0,
    data_a: "",
    data_b: "",
    data_c: "",
    ready_a: false,
    ready_b: false,
    ready_c: false,
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
  update_sl_a(state, sl_a) {
    state.moduleData.sl_a = sl_a;
  },
  update_sl_b(state, sl_b) {
    state.moduleData.sl_b = sl_b;
  },
  update_sl_c(state, sl_c) {
    state.moduleData.sl_c = sl_c;
  },
  update_sl_d(state, sl_d) {
    state.moduleData.sl_d = sl_d;
  },
  update_sl_e(state, sl_e) {
    state.moduleData.sl_e = sl_e;
  },
  update_sl_f(state, sl_f) {
    state.moduleData.sl_f = sl_f;
  },
  update_sl_g(state, sl_g) {
    state.moduleData.sl_g = sl_g;
  },
  update_sl_h(state, sl_h) {
    state.moduleData.sl_h = sl_h;
  },
  update_sl_i(state, sl_i) {
    state.moduleData.sl_i = sl_i;
  },
  update_sl_j(state, sl_j) {
    state.moduleData.sl_j = sl_j;
  },
  update_sl_k(state, sl_k) {
    state.moduleData.sl_k = sl_k;
  },
  update_sl_l(state, sl_l) {
    state.moduleData.sl_l = sl_l;
  },
  update_sl_m(state, sl_m) {
    state.moduleData.sl_m = sl_m;
  },
  update_sl_n(state, sl_n) {
    state.moduleData.sl_n = sl_n;
  },
  update_sl_o(state, sl_o) {
    state.moduleData.sl_o = sl_o;
  },
  update_sl_p(state, sl_p) {
    state.moduleData.sl_p = sl_p;
  },
  update_sl_q(state, sl_q) {
    state.moduleData.sl_q = sl_q;
  },
  update_sl_r(state, sl_r) {
    state.moduleData.sl_r = sl_r;
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
};

export const actions = {
  async getModulesData({ commit }, payload) {
    commit("SET_LOADING", true);
    try {
      const response = await DataService.getDataL(payload);
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
      const response = await DataService.saveDataL(state.moduleData);
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
  sl_a: (state) => {
    return state.moduleData.sl_a;
  },
  sl_b: (state) => {
    return state.moduleData.sl_b;
  },
  sl_c: (state) => {
    return state.moduleData.sl_c;
  },
  sl_d: (state) => {
    return state.moduleData.sl_d;
  },
  sl_e: (state) => {
    return state.moduleData.sl_e;
  },
  sl_f: (state) => {
    return state.moduleData.sl_f;
  },
  sl_g: (state) => {
    return state.moduleData.sl_g;
  },
  sl_h: (state) => {
    return state.moduleData.sl_h;
  },
  sl_i: (state) => {
    return state.moduleData.sl_i;
  },
  sl_j: (state) => {
    return state.moduleData.sl_j;
  },
  sl_k: (state) => {
    return state.moduleData.sl_k;
  },
  sl_l: (state) => {
    return state.moduleData.sl_l;
  },
  sl_m: (state) => {
    return state.moduleData.sl_m;
  },
  sl_n: (state) => {
    return state.moduleData.sl_n;
  },
  sl_o: (state) => {
    return state.moduleData.sl_o;
  },
  sl_p: (state) => {
    return state.moduleData.sl_p;
  },
  sl_q: (state) => {
    return state.moduleData.sl_q;
  },
  sl_r: (state) => {
    return state.moduleData.sl_r;
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
  loading: (state) => {
    return state.loading;
  },
};
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
    question_a: "",
    question_b: "",
    question_c: "",
    question_d: "",
    question_e: "",
    question_f: "",
    question_g: "",
    question_h: "",
    question_i: "",
    question_j: "",
    question_k: "",
    question_l: "",
    question_m: "",
    question_n: "",
    question_o: "",
    question_p: "",
    question_q: "",
    data_a: "",
    data_b: "",
    data_c: "",
    data_d: "",
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
  update_question_a(state, question_a) {
    state.moduleData.question_a = question_a;
  },
  update_question_b(state, question_b) {
    state.moduleData.question_b = question_b;
  },
  update_question_c(state, question_c) {
    state.moduleData.question_c = question_c;
  },
  update_question_d(state, question_d) {
    state.moduleData.question_d = question_d;
  },
  update_question_e(state, question_e) {
    state.moduleData.question_e = question_e;
  },
  update_question_f(state, question_f) {
    state.moduleData.question_f = question_f;
  },
  update_question_g(state, question_g) {
    state.moduleData.question_g = question_g;
  },
  update_question_h(state, question_h) {
    state.moduleData.question_h = question_h;
  },
  update_question_i(state, question_i) {
    state.moduleData.question_i = question_i;
  },
  update_question_j(state, question_j) {
    state.moduleData.question_j = question_j;
  },
  update_question_k(state, question_k) {
    state.moduleData.question_k = question_k;
  },
  update_question_l(state, question_l) {
    state.moduleData.question_l = question_l;
  },
  update_question_m(state, question_m) {
    state.moduleData.question_m = question_m;
  },
  update_question_n(state, question_n) {
    state.moduleData.question_n = question_n;
  },
  update_question_o(state, question_o) {
    state.moduleData.question_o = question_o;
  },
  update_question_p(state, question_p) {
    state.moduleData.question_p = question_p;
  },
  update_question_q(state, question_q) {
    state.moduleData.question_q = question_q;
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
};

export const actions = {
  async getModulesData({ commit }, payload) {
    commit("SET_LOADING", true);
    try {
      const response = await DataService.getDataN(payload);
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
      const response = await DataService.saveDataN(state.moduleData);
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
  question_a: (state) => {
    return state.moduleData.question_a;
  },
  question_b: (state) => {
    return state.moduleData.question_b;
  },
  question_c: (state) => {
    return state.moduleData.question_c;
  },
  question_d: (state) => {
    return state.moduleData.question_d;
  },
  question_e: (state) => {
    return state.moduleData.question_e;
  },
  question_f: (state) => {
    return state.moduleData.question_f;
  },
  question_g: (state) => {
    return state.moduleData.question_g;
  },
  question_h: (state) => {
    return state.moduleData.question_h;
  },
  question_i: (state) => {
    return state.moduleData.question_i;
  },
  question_j: (state) => {
    return state.moduleData.question_j;
  },
  question_k: (state) => {
    return state.moduleData.question_k;
  },
  question_l: (state) => {
    return state.moduleData.question_l;
  },
  question_m: (state) => {
    return state.moduleData.question_m;
  },
  question_n: (state) => {
    return state.moduleData.question_n;
  },
  question_o: (state) => {
    return state.moduleData.question_o;
  },
  question_p: (state) => {
    return state.moduleData.question_p;
  },
  question_q: (state) => {
    return state.moduleData.question_q;
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
  loading: (state) => {
    return state.loading;
  },
};

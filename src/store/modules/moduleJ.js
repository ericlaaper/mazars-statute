import { getError } from "@/plugins/helpers";
import DataService from "@/services/DataService";
export const namespaced = true;

export const state = {
  moduleData: {
    id: 0,
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
    question_r: "",
    question_s: "",
    question_t: "",
    question_u: "",
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
  update_question_r(state, question_r) {
    state.moduleData.question_r = question_r;
  },
  update_question_s(state, question_s) {
    state.moduleData.question_s = question_s;
  },
  update_question_t(state, question_t) {
    state.moduleData.question_t = question_t;
  },
  update_question_u(state, question_u) {
    state.moduleData.question_u = question_u;
  },
};

export const actions = {
  async getModulesData({ commit }, payload) {
    commit("SET_LOADING", true);
    try {
      const response = await DataService.getDataJ(payload);
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
      const response = await DataService.saveDataJ(state.moduleData);
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
  question_r: (state) => {
    return state.moduleData.question_r;
  },
  question_s: (state) => {
    return state.moduleData.question_s;
  },
  question_t: (state) => {
    return state.moduleData.question_t;
  },
  question_u: (state) => {
    return state.moduleData.question_u;
  },
  loading: (state) => {
    return state.loading;
  },
};

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
    sl_s: 0,
    sl_t: 0,
    sl_u: 0,
    sl_v: 0,
    sl_w: 0,
    sl_x: 0,
    sl_y: 0,
    sl_z: 0,
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
    ready_a: false,
    ready_b: false,
    ready_c: false,
    ready_d: false,
    ready_e: false,
    ready_f: false,
    finished: false,
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
  update_ready_e(state, ready_e) {
    state.moduleData.ready_e = ready_e;
  },
  update_ready_f(state, ready_f) {
    state.moduleData.ready_f = ready_f;
  },
  update_finished(state, finished) {
    state.moduleData.finished = finished;
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
  update_sl_s(state, sl_s) {
    state.moduleData.sl_s = sl_s;
  },
  update_sl_t(state, sl_t) {
    state.moduleData.sl_t = sl_t;
  },
  update_sl_u(state, sl_u) {
    state.moduleData.sl_u = sl_u;
  },
  update_sl_v(state, sl_v) {
    state.moduleData.sl_v = sl_v;
  },
  update_sl_w(state, sl_w) {
    state.moduleData.sl_w = sl_w;
  },
  update_sl_x(state, sl_x) {
    state.moduleData.sl_x = sl_x;
  },
  update_sl_y(state, sl_y) {
    state.moduleData.sl_y = sl_y;
  },
  update_sl_z(state, sl_z) {
    state.moduleData.sl_z = sl_z;
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
};

export const actions = {
  async getModulesData({ commit }, payload) {
    commit("SET_LOADING", true);
    try {
      const response = await DataService.getDataB(payload);
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
      const response = await DataService.saveDataB(state.moduleData);
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
  ready_e: (state) => {
    return state.moduleData.ready_e;
  },
  ready_f: (state) => {
    return state.moduleData.ready_f;
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
  sl_s: (state) => {
    return state.moduleData.sl_s;
  },
  sl_t: (state) => {
    return state.moduleData.sl_t;
  },
  sl_u: (state) => {
    return state.moduleData.sl_u;
  },
  sl_v: (state) => {
    return state.moduleData.sl_v;
  },
  sl_w: (state) => {
    return state.moduleData.sl_w;
  },
  sl_x: (state) => {
    return state.moduleData.sl_x;
  },
  sl_y: (state) => {
    return state.moduleData.sl_y;
  },
  sl_z: (state) => {
    return state.moduleData.sl_z;
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
  loading: (state) => {
    return state.loading;
  },
};

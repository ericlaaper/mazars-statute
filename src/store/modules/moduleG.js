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
    sl_s: 0,
    sl_t: 0,
    sl_u: 0,
    sl_v: 0,
    sl_w: 0,
    sl_x: 0,
    sl_y: 0,
    sl_z: 0,
    sl_za: 0,
    sl_zb: 0,
    sl_zc: 0,
    sl_zd: 0,
    sl_ze: 0,
    sl_zf: 0,
    sl_zg: 0,
    sl_zh: 0,
    sl_zi: 0,
    sl_zj: 0,
    sl_zk: 0,
    sl_zl: 0,
    sl_zm: 0,
    sl_zn: 0,
    sl_zo: 0,
    sl_zp: 0,
    sl_zq: 0,
    sl_zr: 0,
    sl_zs: 0,
    ready_a: false,
    ready_b: false,
    ready_c: false,
    ready_d: false,
    ready_e: false,
    ready_f: false,
    ready_g: false,
    ready_h: false,
    ready_i: false,
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
  update_ready_g(state, ready_g) {
    state.moduleData.ready_g = ready_g;
  },
  update_ready_h(state, ready_h) {
    state.moduleData.ready_h = ready_h;
  },
  update_ready_i(state, ready_i) {
    state.moduleData.ready_i = ready_i;
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
  update_sl_za(state, sl_za) {
    state.moduleData.sl_za = sl_za;
  },
  update_sl_zb(state, sl_zb) {
    state.moduleData.sl_zb = sl_zb;
  },
  update_sl_zc(state, sl_zc) {
    state.moduleData.sl_zc = sl_zc;
  },
  update_sl_zd(state, sl_zd) {
    state.moduleData.sl_zd = sl_zd;
  },
  update_sl_ze(state, sl_ze) {
    state.moduleData.sl_ze = sl_ze;
  },
  update_sl_zf(state, sl_zf) {
    state.moduleData.sl_zf = sl_zf;
  },
  update_sl_zg(state, sl_zg) {
    state.moduleData.sl_zg = sl_zg;
  },
  update_sl_zh(state, sl_zh) {
    state.moduleData.sl_zh = sl_zh;
  },
  update_sl_zi(state, sl_zi) {
    state.moduleData.sl_zi = sl_zi;
  },
  update_sl_zj(state, sl_zj) {
    state.moduleData.sl_zj = sl_zj;
  },
  update_sl_zk(state, sl_zk) {
    state.moduleData.sl_zk = sl_zk;
  },
  update_sl_zl(state, sl_zl) {
    state.moduleData.sl_zl = sl_zl;
  },
  update_sl_zm(state, sl_zm) {
    state.moduleData.sl_zm = sl_zm;
  },
  update_sl_zn(state, sl_zn) {
    state.moduleData.sl_zn = sl_zn;
  },
  update_sl_zo(state, sl_zo) {
    state.moduleData.sl_zo = sl_zo;
  },
  update_sl_zp(state, sl_zp) {
    state.moduleData.sl_zp = sl_zp;
  },
  update_sl_zq(state, sl_zq) {
    state.moduleData.sl_zq = sl_zq;
  },
  update_sl_zr(state, sl_zr) {
    state.moduleData.sl_zr = sl_zr;
  },
  update_sl_zs(state, sl_zs) {
    state.moduleData.sl_zs = sl_zs;
  },
};

export const actions = {
  async getModulesData({ commit }, payload) {
    commit("SET_LOADING", true);
    try {
      const response = await DataService.getDataG(payload);
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
      const response = await DataService.saveDataG(state.moduleData);
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
  ready_g: (state) => {
    return state.moduleData.ready_g;
  },
  ready_h: (state) => {
    return state.moduleData.ready_h;
  },
  ready_i: (state) => {
    return state.moduleData.ready_i;
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
  sl_za: (state) => {
    return state.moduleData.sl_za;
  },
  sl_zb: (state) => {
    return state.moduleData.sl_zb;
  },
  sl_zc: (state) => {
    return state.moduleData.sl_zc;
  },
  sl_zd: (state) => {
    return state.moduleData.sl_zd;
  },
  sl_ze: (state) => {
    return state.moduleData.sl_ze;
  },
  sl_zf: (state) => {
    return state.moduleData.sl_zf;
  },
  sl_zg: (state) => {
    return state.moduleData.sl_zg;
  },
  sl_zh: (state) => {
    return state.moduleData.sl_zh;
  },
  sl_zi: (state) => {
    return state.moduleData.sl_zi;
  },
  sl_zj: (state) => {
    return state.moduleData.sl_zj;
  },
  sl_zk: (state) => {
    return state.moduleData.sl_zk;
  },
  sl_zl: (state) => {
    return state.moduleData.sl_zl;
  },
  sl_zm: (state) => {
    return state.moduleData.sl_zm;
  },
  sl_zn: (state) => {
    return state.moduleData.sl_zn;
  },
  sl_zo: (state) => {
    return state.moduleData.sl_zo;
  },
  sl_zp: (state) => {
    return state.moduleData.sl_zp;
  },
  sl_zq: (state) => {
    return state.moduleData.sl_zq;
  },
  sl_zr: (state) => {
    return state.moduleData.sl_zr;
  },
  sl_zs: (state) => {
    return state.moduleData.sl_zs;
  },
  loading: (state) => {
    return state.loading;
  },
};

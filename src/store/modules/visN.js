import { getError } from "@/plugins/helpers";
import VisService from "@/services/VisService";
export const namespaced = true;

export const state = {
  visData: {},
  loading: false,
  error: null,
};

export const mutations = {
  SET_MODULES(state, visData) {
    state.visData = visData;
  },
  SET_LOADING(state, loading) {
    state.loading = loading;
  },
  SET_ERROR(state, error) {
    state.error = error;
  },
  SET_DATA(state, visData) {
    state.visData = visData;
  },
};

export const actions = {
  async getVisData({ commit }, payload) {
    commit("SET_LOADING", true);
    try {
      const response = await VisService.getVisN(payload);
      commit("SET_DATA", response.data.data);
      commit("SET_LOADING", false);
      commit("SET_ERROR", response);
    } catch (error) {
      commit("SET_LOADING", false);
      commit("SET_ERROR", getError(error));
    }
  },
};
export const getters = {
  visData: (state) => {
    return state.visData;
  },
  loading: (state) => {
    return state.loading;
  },
};

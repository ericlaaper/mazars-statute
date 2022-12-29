import { getError } from "@/plugins/helpers";
import ModuleService from "@/services/ModuleService";
export const namespaced = true;

export const state = {
  moduleData: {
    module_a: {
      readyA: false,
    },
    module_b: {
      readyA: false,
    },
    module_c: {
      readyA: false,
    },
    module_d: {
      readyA: false,
    },
    module_e: {
      readyA: false,
    },
    module_f: {
      readyA: false,
    },
    module_g: {
      readyA: false,
    },
    module_h: {
      readyA: false,
    },
    module_i: {
      readyA: false,
    },
    module_j: {
      readyA: false,
    },
    module_k: {
      readyA: false,
    },
    module_l: {
      readyA: false,
    },
    module_m: {
      readyA: false,
    },
    module_n: {
      readyA: false,
    },
  },
  loading: false,
  error: null,
};

export const mutations = {
  SET_MODULES(state, moduleData) {
    state.moduleData = moduleData;
  },
  SET_LOADING(state, loading) {
    state.loading = loading;
  },
  SET_ERROR(state, error) {
    state.error = error;
  },
  SET_DATA(state, moduleData) {
    state.moduleData = moduleData;
  },
};

export const actions = {
  async getModulesData({ commit }, payload) {
    commit("SET_LOADING", true);
    try {
      const response = await ModuleService.getStatus(payload);
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
  moduleData: (state) => {
    return state.moduleData;
  },
  loading: (state) => {
    return state.loading;
  },
};

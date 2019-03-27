import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    projects: [

    ]
  },
  getters: {
    getProjects: state => {
      return state.projects;
    }
  },
  mutations: {
    updateProjectsList: (state, data) => {
      state.projects = data;
    }
  },
  actions: {}
});

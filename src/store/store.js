import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    projects: [
      {
        "name": "Atlas Microsite",
        "number": 7100,
        "description": "Lorem ipsum dolor sit amet consectetur, adipisicing elit.Eaque consectetur",
        "date": "Wed Mar 27 2019 09:53:43 GMT+0000 (Greenwich Mean Time)",
        "client": "Sinclair Breweries",
        "owner": "Lauren"
      }
    ]
  },
  getters: {
    getProjects: state => {
      return state.projects;
    }
  },
  mutations: {
    updateFormReport: (state, data) => {
      state.formData.push({
        event: data.event,
        name: data.name,
        email: data.email,
        search: data.search
      });
    },
    resetFormData: state => {
      state.formData = [];
    }
  },
  actions: {}
});

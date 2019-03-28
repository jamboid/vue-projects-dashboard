import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    mode: 'default', // 'default' or 'edit'
    editing: 0,
    projects: [],
  },
  getters: {
    allProjects: state => {
      return state.projects;
    },
    mode: state => {
      return state.mode;
    },
    editing: state => {
      return state.editing;
    },
    projectDetails: state => {
      state.projects.forEach(function(project) {
        if (project.number === state.editing) {
          return project;
        }
      });
    }
  },
  mutations: {
    updateProjectsList: (state, data) => {
      state.projects = data;
    },
    updateProject: (state, data) => {
      console.log(data);
      state.mode = 'default';
    },
    setMode: (state, mode) => {
      state.mode = mode; 
    },
    cancelEdit: (state) => {
      state.mode = 'default';
      state.editing = 0;
    },
    editProject: (state, projectNumber) => {
      state.editing = projectNumber;
      state.mode = "edit";
    }
  },
  actions: {}
});

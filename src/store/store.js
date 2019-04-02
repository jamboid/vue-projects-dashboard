import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    mode: 'default', // 'default' or 'edit'
    editing: 0,
    projects: [],
    prefs: {
      darkMode: false
    }
  },
  getters: {
    allProjects: state => {
      return state.projects;
    },

    prefs: state => {
      return state.prefs;
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
      const PROJECT_TO_UPDATE = state.projects.find(function(project){
        return project.number === data.number;
      });

      PROJECT_TO_UPDATE.name = data.name;
      PROJECT_TO_UPDATE.client = data.client;
      PROJECT_TO_UPDATE.description = data.description;
      PROJECT_TO_UPDATE.owner = data.owner;

      state.mode = 'default';
      state.editing = 0;
    },

    updatePrefs: (state, data) => {
      if(data.darkMode) {
        state.prefs.darkMode = data.darkMode;
      }

      localStorage.setItem('prefs', JSON.stringify(data));
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

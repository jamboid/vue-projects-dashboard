import Vue from "vue";
import Vuex from "vuex";
import { getJSON } from "@/modules/Ajax";

Vue.use(Vuex);


export const store = new Vuex.Store({
  state: {
    mode: "default", // 'default' or 'edit'
    editing: 0,
    projects: [],
    prefs: {
      toggle: false
    },
    ticketNumber: 0
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
    },

    ticketNumber: state => {
      return state.ticketNumber;
    }
  },
  mutations: {
    // Update projects list with new data from server
    updateProjectsList: (state, data) => {
      state.projects = data;
    },

    // Update a specific project with new data from editor
    updateProject: (state, data) => {
      const PROJECT_TO_UPDATE = state.projects.find(function(project) {
        return project.number === data.number;
      });

      PROJECT_TO_UPDATE.name = data.name;
      PROJECT_TO_UPDATE.client = data.client;
      PROJECT_TO_UPDATE.description = data.description;
      PROJECT_TO_UPDATE.owner = data.owner;

      state.mode = "default";
      state.editing = 0;
    },

    // Update user preferences with data from localStorage (in init) or Prefs panel component
    updatePrefs: (state, data) => {
      if (data.toggle) {
        state.prefs.toggle = data.toggle;
      }

      localStorage.setItem("prefs", JSON.stringify(data));
    },

    setMode: (state, mode) => {
      state.mode = mode;
    },

    cancelEdit: state => {
      state.mode = "default";
      state.editing = 0;
    },

    editProject: (state, projectNumber) => {
      state.editing = projectNumber;
      state.mode = "edit";
    },

    nextTicket: state => {
      state.ticketNumber++;
    }
  },
  actions: {
    initialiseProjects({ commit }, data) {
      const ENDPOINT = data.endpoint;
      getJSON(ENDPOINT)
        .then(data => {
          const PROJECTS = data.projects;
          commit("updateProjectsList", PROJECTS);
        })
        .catch(err => {
          console.log(err);
        });
    },

    saveProjectChanges({commit}, data) {
      const NEW_TICKET = this.getters.ticketNumber;
      data.vm.$notify({ message: 'Project saving...', ticket: NEW_TICKET});
      this.commit('nextTicket');

      // TODO: Replace this fakey timeout with an Ajax POST
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          commit("updateProject", data);
          data.vm.$notify({ ticket: NEW_TICKET });
          resolve();
        }, 2000);
      })
    }
  }
});

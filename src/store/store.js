import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    formData: [{
      event: null,
      name: 'Not set',
      email: 'Not set',
      search: 'Not set'
    },]
  },
  getters: {
    formEvent: (state) => {
      return state.formEvent;
    }
  },
  mutations: {
    updateFormReport:(state, data) => {
      state.formData.push({
        event: data.event,
        name: data.name,
        email: data.email,
        search: data.search
      });
    },
    resetFormData: (state) => {
      state.formData = [{
        event: null,
        name: 'Not set',
        email: 'Not set',
        search: 'Not set'
      }]
    }
  },
  actions: {

  }
});

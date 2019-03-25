import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    formData: {
      event: null,
      name: 'Not set',
      email: 'Not set',
      search: 'Not set'
    }
  },
  getters: {
    formEvent: (state) => {
      return state.formEvent;
    }
  },
  mutations: {
    updateFormReport:(state, data) => {
      state.formData.event = data.event;
      state.formData.name = data.name;
      state.formData.email = data.email;
      state.formData.search = data.search;
    }
  },
  actions: {

  }
});

import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
         state: {
           formData: []
         },
         getters: {
           formData: state => {
             return state.formData;
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

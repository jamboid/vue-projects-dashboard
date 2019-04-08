import Vue from 'vue';
import App from './App.vue';
import Notifier from './plugins/Notifier/'

import { store } from "./store/store";

import './registerServiceWorker';
import './assets/scss/global.scss';

Vue.use(Notifier);

Vue.config.productionTip = false;

new Vue({
  store:store,
  render: h => h(App),
}).$mount('#app');

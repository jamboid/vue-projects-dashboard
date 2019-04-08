import Vue from 'vue'
import Notifier from './Notifier.vue'
import defaultOptions from './defaults.js';
import { events } from './events'

export default {
  // The install method will be called with the Vue constructor as
  // the first argument, along with possible options
  install(Vue, opts) {
    const options = { ...defaultOptions, ...opts}

    const notify = (params) => {
      console.log('create a notification for this thing: ' + params.message);


      // if (typeof params === 'string') {
      //   params = { title: '', text: params }
      // }

      if (typeof params === 'object') {
        events.$emit('add', { params });
      }
    }

    Vue.component('Notifier', Notifier);
    const name = 'notify';

    Vue.prototype['$' + name] = notify;
    Vue[name] = notify;
  }
}

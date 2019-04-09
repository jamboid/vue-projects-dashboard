import Vue from 'vue'
import Notifier from './Notifier.vue'
import defaultOptions from './defaults.js';
import { events } from './events'

export default {
  // The install method will be called with the Vue constructor as
  // the first argument, along with possible options
  install(Vue, opts) {
    //const options = { ...defaultOptions, ...opts}

    const notify = (params) => {
      if (typeof params === 'object' && params.message) {
        events.$emit('add', { params });
        return params.ticket;
      } else if (typeof params === 'object') {
        const TICKET = params.ticket;
        events.$emit('kill', { ticket: TICKET });
      }
    }

    Vue.component('Notifier', Notifier);
    const NAME = 'notify';

    Vue.prototype['$' + NAME] = notify;
    Vue[NAME] = notify;
  }
}

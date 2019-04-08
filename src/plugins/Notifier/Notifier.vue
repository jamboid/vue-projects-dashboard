<template>
  <div class="cp_Notifier">
    <div class="cp_Notifier__messages">
      <Notification v-for="message in messages" :key="message.id"></Notification>
    </div>
  </div>
</template>

<script>
import { events } from './events';
import defaults from './defaults';
import Notification from './Notification.vue';

const STATE = {
  IDLE: 0,
  DESTROYED: 2
};

export default {
  name: 'Notifier',
  data () {
    return {
      messages: [],
      count: 0
    }
  },
  props: {

  },
  computed: {

  },
  methods: {
    addMessage: function (event) {

      console.log(event.params.message);

      let message = {
        id: this.count,
        body: event.params.message,
        state: STATE.IDLE,
      }

      // Build notication object and push it into the messages array to update
      this.messages.push(message);

      // TODO: Add conditional for timer mode
      message.timer = setTimeout(() => {
        console.log('destroy message');
        this.destroy(message);
      }, defaults.delay);

      // TODO: Can this (using a count for the id on the list) be done better? Not sure...
      this.count++;
    },

    destroy: function (message) {
      clearTimeout(message.timer);
      message.state = STATE.DESTROYED;
      this.clean();
    },

    clean: function () {
      this.messages = this.messages.filter(v => v.state !== STATE.DESTROYED)
    }
  },
  mounted () {
    events.$on('add', this.addMessage);
  },
}
</script>

<style lang="scss" scoped>
  @import './Notifier.scss';
</style>


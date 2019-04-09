<template>
  <div class="cp_Notifier">
    <div class="cp_Notifier__messages">
      <Notification v-for="message in messages" :messageBody="message.body" :key="message.id"></Notification>
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
  components: {
    Notification
  },
  data () {
    return {
      messages: []
    }
  },
  props: {

  },
  computed: {

  },
  methods: {
    addMessage: function (event) {
      let message = {
        id: event.params.ticket,
        body: event.params.message,
        state: STATE.IDLE,
        killDelay: event.params.delay
      }

      // Build notication object and push it into the messages array to update
      this.messages.push(message);

      // TODO: Add conditional for timer mode
      // if(message.killDelay) {
      //   message.timer = setTimeout(() => {
      //     console.log('destroy message');
      //     this.destroy(message);
      //   }, defaults.delay);
      // }

      // TODO: Can this (using a count for the id on the list) be done better? Not sure...

    },

    killMessage: function (data) {

      const TICKET_NUM = data.ticket;
      const MESSAGE_TO_KILL = this.messages.find(function(element) {
        return element.id === TICKET_NUM;
      });

      this.destroy(MESSAGE_TO_KILL);
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
    events.$on('kill', this.killMessage);
  },
}
</script>

<style lang="scss" scoped>
  @import './Notifier.scss';
</style>


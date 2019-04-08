<template>
  <transition name="fade">
    <div class="cp_Notification">
      <h3 class="cp_Notification__title">{{message.id}}: {{ message.body }}</h3>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'Notification',
  data() {
    return {

    }
  },
  props: {

  },
  methods: {

  },
}
</script>

<style lang="scss" scoped>
  @import './Notification.scss';
</style>


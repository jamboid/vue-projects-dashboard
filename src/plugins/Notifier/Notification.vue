<template>
  <transition name="fade">
    <div class="cp_Notification">
      <h3 class="cp_Notification__title">{{ messageBody }}</h3>
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
    messageBody: {
      type: String
    }
  },
  methods: {

  },
}
</script>

<style lang="scss" scoped>
  @import './Notification.scss';
</style>


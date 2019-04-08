<template>
  <transition name="fade">
    <div class="cp_Notifier__message" v-for="message in messages" :key="message.id">
      <h3 class="cp_Notifier__title">{{message.id}}: {{ message.body }}</h3>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'Notification'
}
</script>

<style lang="scss" scoped>
  @import './Notification.scss';
</style>


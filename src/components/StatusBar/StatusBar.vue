<template>
  <section :class="[modeClass, 'cp_StatusBar']">
    <div class="cp_StatusBar__inner">
      <h2 class="cp_StatusBar__title">{{ messageTitle }}</h2>
      <div class="cp_StatusBar__body"></div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'StatusBar',
  data() {
    return {
    }
  },
  computed: {
    modeClass () {
      let classString = "";
      if (this.mode) {
        classString += 'cp_StatusBar--' + this.mode;
      }
      return classString;
    }
  },
  props: {
    mode: {
      type: String,
      required: false
    },
    messageTitle: {
      type: String,
      required: true
    },
    messageBody: {
      type: String,
      required: false
    }
  },
  methods: {

  }
}
</script>

<style lang="scss" scoped>
  @import 'StatusBar.scss';
</style>

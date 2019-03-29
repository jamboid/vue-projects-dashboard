<template>
  <button type="submit" v-on="onClick !== undefined ? { click: onClick } : null" :class="['ob_FormButton', 'ob_FormButton--' + mode]">{{label}}</button>
</template>

<script>
export default {
  name: "FormButton",
  props: {
    label: {
      type: String,
      required: true,
    },
    mode: {
      type:String,
      required: true
    },
    onClick: {
      type: Function,
      required: false
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "FormButton.scss";
</style>


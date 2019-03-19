<template>
  <button @click="onClick" :class="['ob_FormButton', 'ob_FormButton--' + mode]">{{ label }}</button>
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
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "FormButton.scss";
</style>


<template>
  <input type="submit" @click="onClick" :class="['ob_FormButton', 'ob_FormButton--' + mode]" :value="label" />
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


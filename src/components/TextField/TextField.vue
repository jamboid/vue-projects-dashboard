<template>
  <div class="cp_TextField">
    <label class="cp_TextField__label" for="">{{ label }}</label>
    <input class="cp_TextField__input"  v-bind:value="value" v-on:input="$emit('input', $event.target.value)" type="text">
  </div>
</template>

<script>
export default {
  name: "TextField",
  props: {
    value: {
      type:String
    },
    label: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
  @import 'TextField.scss'
</style>


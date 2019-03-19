<template>
  <div class="cp_TextField">
    <label class="cp_TextField__label" :for="id" >{{ label }}</label>
    <input :id="id" class="cp_TextField__input" v-bind:value="value" v-on:input="$emit('input', $event.target.value)" type="text">
  </div>
</template>

<script>
export default {
  name: "TextField",
  props: {
    id: {
      type:String,
      required: true
    },
    value: {
      type:String
    },
    label: {
      type: String,
      required: true
    },
    required: {
      type: Boolean,
      require: false
    }
  }
}
</script>

<style lang="scss" scoped>
  @import 'TextField.scss'
</style>


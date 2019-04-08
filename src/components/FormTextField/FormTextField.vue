<template>
  <div class="cp_TextField" :class="{ [`cp_TextField--${status}`]: status }">
    <label class="cp_TextField__label" :for="id" >{{ label }}</label>
    <input
      type="text"
      :id="id"
      class="cp_TextField__input"
      v-bind:value="value"
      v-on:input="$emit('input', $event.target.value)"
      v-on:blur="$emit('blur', $event.target.value)"
      >
  </div>
</template>

<script>
export default {
  name: "FormTextField",
  props: {
    id: {
      type:String,
      required: true
    },
    value: {
      type:String,
      required: false
    },
    label: {
      type: String,
      required: true
    },
    status: {
      type: String,
      required: false
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "FormTextField.scss";
</style>


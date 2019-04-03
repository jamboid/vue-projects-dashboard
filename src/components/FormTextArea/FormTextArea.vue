<template>
  <div class="cp_TextArea" :class="{ [`cp_TextArea--${status}`]: status }">
    <label class="cp_TextArea__label" :for="id" >{{ label }}</label>
    <textarea
      type="text"
      :id="id"
      class="cp_TextArea__input"
      v-bind:value="value"
      @input="$emit('input', $event.target.value)"
      @blur="$emit('blur', $event.target.value)"
      ></textarea>
  </div>
</template>

<script>
export default {
  name: "FormTextArea",
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
  @import "FormTextArea.scss";
</style>


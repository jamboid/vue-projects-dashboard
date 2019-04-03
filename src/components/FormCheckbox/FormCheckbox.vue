<template>
  <div class="cp_Checkbox" :class="{ [`cp_Checkbox--${status}`]: status }">
    <input
      type="checkbox"
      :id="id"
      class="cp_Checkbox__input"
      :checked="value"
      @change="$emit('input', $event.target.checked)"
      >
      <label class="cp_Checkbox__label" :for="id" >{{ label }}</label>
  </div>

</template>

<script>
export default {
  name: "FormCheckbox",
  props: {
    id: {
      type:String,
      required: true
    },
    value: {
      type:Boolean,
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
  @import "FormCheckbox.scss";
</style>


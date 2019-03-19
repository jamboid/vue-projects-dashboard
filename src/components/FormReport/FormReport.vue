<template>
  <div class="cp_FormReport">
    <div class="cp_FormReport__inner">
      <pre>{{ formData }}</pre>
      <pre>{{ formEvent }}</pre>
    </div>
  </div>
</template>

<script>
export default {
  name: "FormReport",
  props: {
    formData: {
      type: Object,
      require: false
    },
    formEvent: {
      type: Object,
      require: false
    }
  }
}
</script>

<style lang="scss" scoped>
  @import 'FormReport.scss';
</style>

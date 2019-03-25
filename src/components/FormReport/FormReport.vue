<template>
  <div class="cp_FormReport">
    <div class="cp_FormReport__inner">
      <pre>{{ formData }}</pre>
    </div>
  </div>
</template>

<script>
export default {
  name: "FormReport",
  computed: {
    formData () {
      return this.$store.state.formData;
    }
  },
}
</script>

<style lang="scss" scoped>
  @import 'FormReport.scss';
</style>

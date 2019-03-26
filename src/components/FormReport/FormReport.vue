<template>
  <div class="cp_FormReport">
    <div class="cp_FormReport__inner">
      <pre class="cp_FormReport__title">{{ reportTitle }}</pre>
      <pre>{{ formData }}</pre>
    </div>
  </div>
</template>

<script>
export default {
  name: "FormReport",
  props: {
    reportTitle: {
      type:String,
      required: true
    }
  },
  computed: {
    formData () {
      return this.$store.getters.formData;
    }
  },
}
</script>

<style lang="scss" scoped>
  @import 'FormReport.scss';
</style>

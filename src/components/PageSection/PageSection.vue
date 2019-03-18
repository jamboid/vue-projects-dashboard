<template>
  <section :class="['pageSection__' + sectionType, 'pageSection']">
    <div class="pageSection__inner">
      <slot></slot>
    </div>
  </section>
</template>

<script>
export default {
  name:"PageSection",
  props: {
    sectionType: {
      type: String,
      required: false
    }
  }
}
</script>

<style lang="scss" scoped>
  @import 'PageSection.scss';
</style>

<template>
  <section :class="getSectionClass()" class="pageSection" >
    <div :class="['pageSection__inner', 'gd_' + gridType]">
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
    },
    gridType: {
      type: String,
      required: false
    }
  },
  methods: {
    getSectionClass: function() {
      let classString = "";
      if (this.sectionType) {
        classString += 'pageSection--' + this.sectionType;
      }

      return classString;
    }
  }
}
</script>

<style lang="scss" scoped>
  @import 'PageSection.scss';
</style>

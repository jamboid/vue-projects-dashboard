<template>
  <section :class="sectionClass" class="pageSection" >
    <div :class="[innerClass, 'pageSection__inner', 'gd_' + gridType]">
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
  computed: {
    sectionClass () {
      let classString = "";
      if (this.sectionType) {
        classString += 'pageSection--' + this.sectionType;
      }
      return classString;
    },
    innerClass () {
      let classString = "";
      if (this.sectionType) {
        classString += 'pageSection__inner--' + this.sectionType;
      }
      return classString;
    }
  },
  methods: {

  }
}
</script>

<style lang="scss" scoped>
  @import 'PageSection.scss';
</style>

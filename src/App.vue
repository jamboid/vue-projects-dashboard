<template>
  <div id="app" class="cp_App">
    <PageSection sectionType="header">
      <Logo></Logo>
    </PageSection>
    <PageSection sectionType="main">

    </PageSection>
  </div>
</template>

<script>
import PageSection from "./components/PageSection/PageSection";
import Logo from "./components/Logo/Logo";

export default {
  name: 'app',
  components: {
    PageSection,
    Logo,
  },
  data: function () {
    return {

    }
  },
  methods: {
    handleSubmit: function(event) {

    }
  }
};
</script>

<style lang="scss">

</style>

<template>
  <div id="app" class="cp_App">
    <PageSection sectionType="header" gridType="Base">
      <Logo></Logo>
    </PageSection>
    <PageSection sectionType="main" gridType="Base">
      <ProjectsList></ProjectsList>
    </PageSection>
  </div>
</template>

<script>
import PageSection from "./components/PageSection/PageSection";
import Logo from "./components/Logo/Logo";
import ProjectsList from "./components/ProjectsList/ProjectsList";

export default {
  name: 'app',
  components: {
    PageSection,
    Logo,
    ProjectsList,
  },
  data: function () {
    return {

    }
  },
  methods: {

  }
};
</script>

<style lang="scss">

</style>

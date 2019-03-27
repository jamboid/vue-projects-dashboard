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
import getJSON from './modules/API';

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
    getProjectsFromServer: function () {
      const endpoint = "http://jboyd.wip.gd/remote-data/vue-projects-dashboard.json"

      getJSON(endpoint)
      .then(projects => {
        this.$store.commit('updateProjectsList', projects);
      })
      .catch((err) => {
        console.log(err);
      });
    }
  },
  created() {
    this.getProjectsFromServer();
  }
};
</script>

<style lang="scss">

</style>

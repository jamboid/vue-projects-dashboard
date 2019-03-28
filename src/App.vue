<template>
  <div id="app" class="cp_App">
    <PageSection sectionType="header" gridType="Base">
      <Logo></Logo>
    </PageSection>
    <PageSection sectionType="main" gridType="Base">
      <ProjectsList></ProjectsList>
      <ProjectEditor></ProjectEditor>
    </PageSection>
  </div>
</template>

<script>
import PageSection from "./components/PageSection/PageSection";
import Logo from "./components/Logo/Logo";
import ProjectsList from "./components/ProjectsList/ProjectsList";
import ProjectEditor from "./components/ProjectEditor/ProjectEditor";
import { getJSON } from './modules/Ajax';

export default {
  name: 'app',
  components: {
    PageSection,
    Logo,
    ProjectsList,
    ProjectEditor,
  },
  data: function () {
    return {

    }
  },
  methods: {
    getProjectsFromServer: function () {
      const endpoint = "http://jboyd.wip.gd/remote-data/vue-projects-dashboard.json"

      getJSON(endpoint)
      .then(data => {
        const projects = data.Projects;
        this.$store.commit('updateProjectsList', projects);
      })
      .catch((err) => {
        console.log(err);
      });
    }
  },
  created: function() {
    this.getProjectsFromServer();
  }
};
</script>

<style lang="scss">

</style>

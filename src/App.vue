<template>
  <div id="app" class="cp_App">
    <PageSection sectionType="header" gridType="Base">
      <Logo></Logo>
    </PageSection>
    <PageSection sectionType="main" gridType="Base">
      <ProjectsList></ProjectsList>
      <ProjectEditor></ProjectEditor>
    </PageSection>
    <PageSection sectionType="footer" gridType="Base">
      <DisplayPrefs></DisplayPrefs>
    </PageSection>
  </div>
</template>

<script>
import PageSection from "./components/PageSection/PageSection";
import Logo from "./components/Logo/Logo";
import ProjectsList from "./components/ProjectsList/ProjectsList";
import ProjectEditor from "./components/ProjectEditor/ProjectEditor";
import DisplayPrefs from "./components/DisplayPrefs/DisplayPrefs";

import { getJSON } from './modules/Ajax';

export default {
  name: 'app',
  components: {
    PageSection,
    Logo,
    ProjectsList,
    ProjectEditor,
    DisplayPrefs
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
    },

    getPreferences: function () {
      if(localStorage.prefs) {
        this.$store.commit('updatePrefs', JSON.parse(localStorage.prefs));
      }
    }
  },
  beforeMount: function() {
    this.getProjectsFromServer();
    this.getPreferences();
  }
};
</script>

<style lang="scss">
  .cp_App {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }
</style>

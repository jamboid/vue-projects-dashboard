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
      <StatusBar mode="loading" messageTitle="Projects loading..."></StatusBar>
      <DisplayPrefs></DisplayPrefs>
    </PageSection>
  </div>
</template>

<script>

import PageSection from "@/components/PageSection/PageSection";
import Logo from "@/components/Logo/Logo";
import ProjectsList from "@/components/ProjectsList/ProjectsList";
import ProjectEditor from "@/components/ProjectEditor/ProjectEditor";
import DisplayPrefs from "@/components/DisplayPrefs/DisplayPrefs";
import StatusBar from "@/components/StatusBar/StatusBar";

export default {
  name: 'app',
  components: {
    PageSection,
    Logo,
    ProjectsList,
    ProjectEditor,
    DisplayPrefs,
    StatusBar
  },
  methods: {
    // Get project data from server via Ajax, and use it to initalise the projects in the store
    getProjectsFromServer: function () {
      this.$store.dispatch('initialiseProjects', {
        endpoint: 'http://jboyd.wip.gd/remote-data/vue-projects-dashboard.json'
      })
    },
    // Get preferences stored in localStorage and use these to update the central prefs state
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

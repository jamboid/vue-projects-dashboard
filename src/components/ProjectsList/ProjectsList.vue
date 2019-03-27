<template>
  <section class="cp_ProjectsList">
    <ProjectCard v-for="project in projects" :projectData="project" :key="project.number"></ProjectCard>
  </section>
</template>

<script>
import ProjectCard from "../ProjectCard/ProjectCard.vue";

export default {
  name: "ProjectsList",
  components: {
    ProjectCard,
  },
  computed: {
    projects () {
      return this.$store.getters.getProjects;
    }
  },
}
</script>

<style lang="scss" scoped>
  @import "ProjectsList.scss";
</style>

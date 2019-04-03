<template>

  <section class="cp_ProjectsList">
    <ProjectCard v-for="project in projects" :projectData="project" :key="project.number"></ProjectCard>
  </section>

</template>

<script>
import ProjectCard from "@/components/ProjectCard/ProjectCard.vue";

export default {
  name: "ProjectsList",
  components: {
    ProjectCard,
  },
  computed: {
    projects () {
      return this.$store.getters.allProjects;
    },
    isVisible: function () {
      return this.$store.getters.mode === 'edit' ? false : true;
    }
  },
}
</script>

<style lang="scss" scoped>
  @import "ProjectsList.scss";
</style>

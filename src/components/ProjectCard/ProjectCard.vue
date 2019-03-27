<template>
   <div class="cp_ProjectCard">
      <div class="cp_ProjectCard__details">
        <h2 class="cp_ProjectCard__title">[{{ projectData.number}}] {{ projectData.name}}</h2>
      </div>
    </div>
</template>

<script>
export default {
  name:"ProjectCard",
  props: {
    projectData: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "ProjectCard.scss";
</style>


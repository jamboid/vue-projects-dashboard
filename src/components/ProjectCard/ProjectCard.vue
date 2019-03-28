<template>
   <div class="cp_ProjectCard" :class="{ 'cp_ProjectCard--editing' : editing  }">
      <div class="cp_ProjectCard__details">
        <h2 class="cp_ProjectCard__title"><span class="cp_ProjectCard__jobNumber">{{ projectData.number}}</span> {{ projectData.name}}</h2>
        <p class="cp_ProjectCard__desc">{{ projectData.description }}</p>
      </div>
      <div class="cp_ProjectCard__actions">
        <button @click="handleEditClick" class="cp_ProjectCard__editButton">
          <EditIcon />
        </button>
      </div>
    </div>
</template>

<script>
import EditIcon from './icon_edit.svg';

export default {
  name:"ProjectCard",
  components: {
    EditIcon
  },
  props: {
    projectData: {
      type: Object,
      required: true
    }
  },
  computed: {
    editing () {
      if(this.$store.getters.mode !== 'default') {
        return true;
      } else {
        return false;
      }
    }
  },
  methods: {
    handleEditClick: function () {
      if(this.$store.getters.mode === 'default') {
        this.$store.commit('editProject', this.projectData.number);
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "ProjectCard.scss";
</style>


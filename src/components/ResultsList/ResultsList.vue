<template>
  <section class="cp_ResultsList">
    <RepoCard>
    ></RepoCard>
  </section>
</template>

<script>
import RepoCard from "../RepoCard/RepoCard.vue";

export default {
  name: "ResultsList",
  components: {
    RepoCard,
  },
  data: function () {
    return {

    }
  }
}
</script>

<style lang="scss" scoped>
  @import "ResultsList.scss";
</style>

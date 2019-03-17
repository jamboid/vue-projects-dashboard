<template>
  <section class="cp_ResultsList" v-show="results.length > 0">
    <RepoCard v-for="result in results" :repoData="result" :key="result.id"></RepoCard>
  </section>
</template>

<script>
import RepoCard from "../RepoCard/RepoCard.vue";

export default {
  name: "ResultsList",
  components: {
    RepoCard,
  },
  props: [
    'results',
  ]
}
</script>

<style lang="scss" scoped>
  @import "ResultsList.scss";
</style>

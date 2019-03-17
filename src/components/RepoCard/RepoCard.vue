<template>
   <div class="cp_RepoCard">
      <div class="cp_RepoCard__details">
        <h2 class="cp_RepoCard__title">{{ repoData.name}}</h2>
        <p class="cp_RepoCard__desc">{{ repoData.description }}</p>
      </div>
      <div class="cp_RepoCard__stars">
        <svg class="cp_RepoCard__starsIcon"  width="23" height="22" xmlns="http://www.w3.org/2000/svg"><path d="M11.5 16.937L4.393 22l2.591-8.363L0 8.403l8.709-.105L11.5 0l2.791 8.298L23 8.403l-6.984 5.234L18.607 22z" fill="#FFCF00" fillRule="evenodd"/></svg>
        <p class="cp_RepoCard__starsTotal">{{ repoData.stars }}</p>
      </div>
      <a class="cp_RepoCard__link" :href=repoData.url target="_blank">
        <svg class="cp_RepoCard__linkIcon" width="36" height="35" xmlns="http://www.w3.org/2000/svg"><g stroke="#FFF" stroke-width="5" fill="none" fill-rule="evenodd" stroke-linecap="round"><path stroke-linejoin="round" d="M17.718 2.567L32.542 17.39 17.719 32.213"/><path d="M29.916 17.567H2.659"/></g></svg>
      </a>
    </div>
</template>

<script>
export default {
  name:"RepoCard",
  props: [
    'repoData'
  ]
}
</script>

<style lang="scss" scoped>
  @import "RepoCard.scss";
</style>


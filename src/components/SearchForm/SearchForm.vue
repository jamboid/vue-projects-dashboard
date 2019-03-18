<template>
  <form class="cp_SearchForm fx_Group" v-on:submit=handleFormSubmit>
    <input class="cp_SearchForm__text" v-model="searchTerm" :placeholder="helperText" type="search" />
    <input class="cp_SearchForm__button" type="submit" value="Search" />
  </form>
</template>

<script>

export default {
  name: "SearchForm",
  props: {
    helperText: {
      type: String,
      required: false
    }
  },
  data: function () {
    return {
      searchTerm: this.searchTerm
    }
  },
  methods: {
    handleFormSubmit:function(e) {
      e.preventDefault();
      this.$emit('submit-message', this.searchTerm);
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "./SearchForm.scss";
</style>

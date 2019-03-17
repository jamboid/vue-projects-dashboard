<template>
  <form class="cp_SearchForm fx_Group" v-on:submit=handleFormSubmit>
    <input class="cp_SearchForm__text" v-model="searchTerm" :placeholder="helperText" type="search" />
    <input class="cp_SearchForm__button" type="submit" value="Search" />
  </form>
</template>

<script>
function handleFormSubmit(e) {
  e.preventDefault();
  const mess = "Form submitted"
  this.$emit('submit-message', this.searchTerm);
}

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
    handleFormSubmit:handleFormSubmit
  }
}
</script>

<style lang="scss" scoped>
  @import "./SearchForm.scss";
</style>

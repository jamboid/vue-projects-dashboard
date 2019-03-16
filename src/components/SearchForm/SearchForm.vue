<template>
  <form class="cp_SearchForm fx_Group" onSubmit={this.handleSubmit}>
    <input class="cp_SearchForm__text" name="searchTerm" onChange={this.handleChange}       :placeholder="helperText" type="search" />
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
  }
}
</script>


<style lang="scss" scoped>
.cp_SearchForm {
  margin:0 auto;
  display:flex;
  max-width:em(400);

  &__text,
  &__button {
    font-size:em(18);
    -webkit-appearance:none;
    padding:em(8) em(15);
    margin: 0;
    box-shadow:none;
    border:2px solid $clrBlue;
  }

  &__text {
    flex:1 1 auto;
    border-radius:5px 0 0 5px;
  }

  &__button {
    flex:0 0 auto;
    background:$clrBlue;
    color:$clrWhite;
    border-radius:0 5px 5px 0;
    cursor: pointer;
  }
}

</style>


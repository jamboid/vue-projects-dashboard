<template>
  <div id="app" class="cp_App">
    <header class="cp_App__header">
      <Logo></Logo>
      <SearchForm @submit-message="handleSubmit" helperText="Enter a username..."></SearchForm>
    </header>
    <ResultsList :results=queryResults></ResultsList>
  </div>
</template>

<script>

import Logo from './components/Logo/Logo.vue';
import SearchForm from './components/SearchForm/SearchForm.vue';
import ResultsList from './components/ResultsList/ResultsList.vue';
import getJSON from './modules/API';
import buildGithubAPIQuery from './modules/QueryBuilder';

export default {
  name: 'app',
  components: {
    Logo,
    SearchForm,
    ResultsList,
  },
  data: function () {
    return {
      username: "",
      queryResults: [],
    }
  },
  methods: {
    handleSubmit: function(event) {
      if(event !== undefined && event.length > 0) {
        this.username = event;
        this.searchAPI();
      } else {
        this.queryResults = [];
      }
    },

    searchAPI: function () {
      if(this.username !== '') {
        getJSON(buildGithubAPIQuery(this.username))
        .then(results => {
          this.queryResults = results;
        })
        .catch((err) => {
          console.log(err);
        });

      } else {
        this.queryResults = [];
      }
    }
  }
};
</script>

<style lang="scss">
body {
  background:$clrOffWhite;
  margin: 0;
  padding: 0;
  font-family: sans-serif;
}

.cp_App {
  text-align: center;

  &__header {
    background:$clrWhite;
    padding:10px 0 em(40);
  }
}
</style>

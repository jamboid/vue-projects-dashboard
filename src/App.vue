<template>
  <div id="app">
    <Logo></Logo>
    <SearchForm @submit-message="handleSubmit" helperText="Enter a username..."></SearchForm>
    <ResultsList :results=queryResults></ResultsList>
  </div>
</template>

<script>

import Logo from './components/Logo/Logo.vue';
import SearchForm from './components/SearchForm/SearchForm.vue';
import ResultsList from './components/ResultsList/ResultsList.vue';
import getJSON from './modules/API';
import buildGithubAPIQuery from './modules/QueryBuilder';



function handleSearchChange (username) {
  this.setState({'username': username});
}

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
        console.log('start search...');
        getJSON(buildGithubAPIQuery(this.username))
        .then(results => {
          console.log(results);
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
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: $clrDarkGrey;
  margin-top: 60px;
}
</style>

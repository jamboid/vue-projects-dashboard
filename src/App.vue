<template>
  <div id="app">
    <Logo></Logo>
    <SearchForm helperText="Enter a username..."></SearchForm>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';
import Logo from './components/Logo/Logo.vue';
import SearchForm from './components/SearchForm/SearchForm.vue';
import getJSON from './modules/API';
import buildGithubAPIQuery from './modules/QueryBuilder';

export default {
  name: 'app',
  components: {
    HelloWorld,
    Logo,
    SearchForm,
  },
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

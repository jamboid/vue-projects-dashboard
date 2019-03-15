<template>
  <div id="app">
    <Logo></Logo>
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';
import Logo from './components/Logo/Logo.vue';
import getJSON from './modules/API';
import buildGithubAPIQuery from './modules/QueryBuilder';

export default {
  name: 'app',
  components: {
    HelloWorld,
    Logo,
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

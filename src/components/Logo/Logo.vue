<template>
  <div class="cp_Logo">
    <h1 class="cp_Logo__image">
      <AppLogo />
    </h1>
    <h1 class="cp_Logo__title">Vue Form Framework</h1>
  </div>
</template>

<script>
import AppLogo from './form-framework-icon.svg';

export default {
  name: "Logo",
  components: {
    AppLogo,
  }
}
</script>

<style lang="scss" scoped>
  @import 'Logo.scss';
</style>

<template>
  <div class="logo">
    <h1 class="logo__image">
      <AppLogo />
    </h1>
    <h1 class="logo__title">Vue Projects Dashboard</h1>
  </div>
</template>

<script>
import AppLogo from '@/components/Logo/projects-dashboard-icon.svg';

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

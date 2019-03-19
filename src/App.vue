<template>
  <div id="app" class="cp_App">
    <PageSection sectionType="header" gridType="Base">
      <Logo></Logo>
    </PageSection>
    <PageSection sectionType="main" gridType="Base">
      <Form @submit-message="handleSubmit"></Form>
    </PageSection>
  </div>
</template>

<script>
import PageSection from "./components/PageSection/PageSection";
import Logo from "./components/Logo/Logo";
import Form from "./components/Form/Form";

export default {
  name: 'app',
  components: {
    PageSection,
    Logo,
    Form
  },
  data: function () {
    return {

    }
  },
  methods: {
    handleSubmit: function(event) {
      console.log(event);
    }
  }
};
</script>

<style lang="scss">

</style>

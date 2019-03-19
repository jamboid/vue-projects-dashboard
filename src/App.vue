<template>
  <div id="app" class="cp_App">
    <PageSection sectionType="header" gridType="Base">
      <Logo></Logo>
    </PageSection>
    <PageSection sectionType="main" gridType="Base">
      <Form @submit-message="handleSubmit"></Form>
      <FormReport :formEvent="formEvent"></FormReport>
    </PageSection>
  </div>
</template>

<script>
import PageSection from "./components/PageSection/PageSection";
import Logo from "./components/Logo/Logo";
import Form from "./components/Form/Form";
import FormReport from "./components/FormReport/FormReport";

export default {
  name: 'app',
  components: {
    PageSection,
    Logo,
    Form,
    FormReport
  },
  data: function () {
    return {
      formEvent: {}
    }
  },
  methods: {
    handleSubmit: function(event) {
      this.formEvent = event;
    }
  }
};
</script>

<style lang="scss">

</style>

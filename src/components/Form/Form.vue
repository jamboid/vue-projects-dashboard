<template>
  <form class="ob_Form" v-on:submit=handleFormSubmit>
    <TextField v-model="name" label="Your Name"></TextField>
    <TextField v-model="email" label="Your email"></TextField>
    <TextField v-model="search" label="Search Term"></TextField>
    <Button :onClick="handleFormSubmit" label="Send now" mode="basic"></Button>
    <Button :onClick="clearForm" label="Clear form" mode="negative"></Button>
  </form>
</template>

<script>

import Button from "../FormButton/FormButton.vue";
import TextField from "../TextField/TextField.vue"

export default {
  name: 'Form',
  components: {
    Button,
    TextField
  },
  data: function () {
    return {
      name: '',
      search: '',
      email: '',
    }
  },
  methods: {
    handleFormSubmit:function(e) {
      e.preventDefault();

      const eventObj = e;
      this.$emit('submit-message', {
        "event": eventObj,
        "name": this.name,
        "search": this.search,
        "email": this.email
      });

      this.clearForm(e);
    },
    clearForm: function(e) {
      e.preventDefault();
      this.name = "";
      this.search = "";
      this.email = "";
    }
  }
}
</script>

<style lang="scss" scoped>
  @import 'Form.scss';
</style>


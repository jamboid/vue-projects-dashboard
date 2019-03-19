<template>
  <form class="cp_Form fx_Group" v-on:submit=handleFormSubmit>
    <TextField v-model="nameText" label="Your Name"></TextField>
    <TextField v-model="emailText" label="Your email"></TextField>
    <TextField v-model="searchText" label="Search Term"></TextField>
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
      nameText: '',
      searchText: '',
      emailText: '',
    }
  },
  methods: {
    handleFormSubmit:function(e) {
      e.preventDefault();
      this.$emit('submit-message', {
        "name": this.nameText,
        "search": this.searchText,
        "email": this.emailText
      });

      this.clearForm(e);
    },
    clearForm: function(e) {
      e.preventDefault();
      this.nameText = "";
      this.searchText = "";
      this.emailText = "";
    }
  }
}
</script>

<style lang="scss" scoped>
  @import 'Form.scss';
</style>


<template>
  <form class="ob_Form" v-on:submit=handleFormSubmit>
    <TextField id="name" v-model="name" label="Your Name" required></TextField>
    <TextField id="email" v-model="email" label="Your email"></TextField>
    <TextField id="search" v-model="search" label="Search Term" required></TextField>
    <div class="ob_Form__actions">
      <Button :onClick="handleFormSubmit" label="Send now" mode="basic"></Button>
      <Button :onClick="resetFormData" label="Reset data" mode="negative"></Button>
    </div>
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
      email: '',
      search: '',
    }
  },
  methods: {
    handleFormSubmit:function(e) {
      e.preventDefault();

      const eventObj = e;

      this.$store.commit('updateFormReport',
        {
          "event": eventObj.type,
          "name": this.name,
          "email": this.email,
          "search": this.search
        }
      );

      this.clearForm(e);
    },

    resetFormData: function(e) {
      this.$store.commit('resetFormData');
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


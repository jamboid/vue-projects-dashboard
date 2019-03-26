<template>
  <form class="ob_Form" @submit.prevent=handleFormSubmit>
    <TextField id="name" v-model="form.name" label="Your Name" :status="$v.form.name.$error ? 'error' : null" @blur="$v.form.name.$touch()"></TextField>
    <TextField id="email" v-model="form.email" label="Your email" :status="$v.form.email.$error ? 'error' : null" @blur="$v.form.email.$touch()"></TextField>
    <TextField id="search" v-model="form.search" label="Search Term"></TextField>
    <div class="ob_Form__actions">
      <Button label="Send now" mode="basic"></Button>
      <Button :onClick="resetFormData" label="Reset data" mode="negative"></Button>
    </div>
  </form>
</template>

<script>

import Button from "../FormButton/FormButton.vue";
import TextField from "../TextField/TextField.vue";
import formMixin from '../../mixins/form';

import { required, between, email } from 'vuelidate/lib/validators';

export default {
  name: 'Form',
  mixins: [formMixin],
  components: {
    Button,
    TextField
  },
  data: function () {
    return {
      form: {
        name: '',
        email: '',
        search: '',
      }
    }
  },
  validations: {
    form: {
      name: {
        required
      },
      email: {
        required,
        email
      }
    }
  },
  methods: {
    handleFormSubmit:function(e) {
      e.preventDefault();

      // Check validation for the whole form and return out of this
      // function if there are any errors..
      this.$v.$touch();
      if(this.$v.$anyError) {
        return
      }

      // Update the store state object by calling the updateFormReport mutation,
      // passing a new object containing the form data
      const eventObj = e;
      this.$store.commit('updateFormReport',
        {
          "event": eventObj.type,
          "name": this.form.name,
          "email": this.form.email,
          "search": this.form.search
        }
      );

      // Now clear the form
      this.clearForm(e);
    },

    resetFormData: function(e) {
      this.$store.commit('resetFormData');
      this.clearForm(e);
    },

    clearForm: function(e) {
      e.preventDefault();

      // Reset the validator object, so we're not creating error states by reseting the form
      this.$v.$reset();

      // Empty the form fields
      this.form.name = "";
      this.form.search = "";
      this.form.email = "";
    }
  }
}
</script>

<style lang="scss" scoped>
  @import 'Form.scss';
</style>


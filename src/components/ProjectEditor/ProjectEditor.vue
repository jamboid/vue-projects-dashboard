<template>
  <form v-if="formVisible"  class="cp_ProjectEditor ob_Form" @submit=handleFormSubmit>
    {{ this.projectNumber }}
    <TextField id="name" v-model="project.name" label="Project Name" :status="$v.project.name.$error ? 'error' : null" @blur="$v.project.name.$touch()"></TextField>
    <TextField id="client" v-model="project.client" label="Client" :status="$v.project.client.$error ? 'error' : null" @blur="$v.project.client.$touch()"></TextField>
    <div class="ob_Form__actions">
      <Button label="Update Project" mode="basic"></Button>
      <Button :onClick=cancelEdit label="Cancel" mode="negative"></Button>
    </div>
  </form>  
</template>

<script>
import Button from "../FormButton/FormButton.vue";
import TextField from "../TextField/TextField.vue";
import FormMixin from '../../mixins/form';

import { required } from 'vuelidate/lib/validators';

export default {
  name: "ProjectEditor",
  mixins: [FormMixin],
  components: {
    TextField,
    Button
  },
  data: function () {
    return {
      project: {
        number: 0,
        name: '',
        description: '',
        client: '',
        owner: '',
      }
    }
  },
  validations: {
    project: {
      name: {
        required
      },
      client: {
        required
      }
    }
  },
  computed: {
    mode() {
      return this.$store.getters.mode;
    },
    projectNumber() {
      return this.$store.getters.editing;
    },
    formVisible: function () {
      this.updateFormData();
      return (this.$store.getters.mode === 'edit' ? true : false);
    }
  },

  methods: {
    updateFormData: function () {
      console.log('updateFormData');

      const allProjects = this.$store.getters.allProjects;
      const currentlyEditing = this.$store.getters.editing;
      let projectToEdit;

      console.log(allProjects.length);
      if(allProjects.length > 0) {
        allProjects.forEach((thisProject) => {
          if (thisProject.number === currentlyEditing) {          
            this.project.number = thisProject.number;
            this.project.name = thisProject.name;
            this.project.client = thisProject.client;
            this.project.owner = thisProject.owner;
            this.project.description = thisProject.description;
          }
        });
      }      
    }, 

    handleFormSubmit: function (e) {
      e.preventDefault();
      
      this.$v.$touch();
      if(this.$v.$anyError) {
        return
      }

      this.$store.commit('updateProject', this.project);

      
    },
    
    cancelEdit: function (e) {
      e.preventDefault();
      console.log('cancelEdit'); 
      this.$store.commit('cancelEdit');
    }
  },
  mounted: function () {
    this.$nextTick(function () {
      this.updateFormData();
    })
  }
}
</script>
<style lang="scss" scoped>
  @import 'ProjectEditor.scss';
</style>

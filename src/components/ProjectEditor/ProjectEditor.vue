<template>
<transition name="fade">
  <form v-if="formVisible"  class="cp_ProjectEditor ob_Form" @submit=handleFormSubmit>
    <div class="cp_ProjectEditor__number">{{ this.projectNumber }}</div>
    <TextField id="name" v-model="project.name" label="Project Name" :status="$v.project.name.$error ? 'error' : null" @blur="$v.project.name.$touch()"></TextField>
    <TextField id="client" v-model="project.client" label="Client" :status="$v.project.client.$error ? 'error' : null" @blur="$v.project.client.$touch()"></TextField>
    <TextField id="owner" v-model="project.owner" label="Owner" :status="$v.project.owner.$error ? 'error' : null" @blur="$v.project.owner.$touch()"></TextField>
    <TextArea id="description" v-model="project.description" label="Description" :status="$v.project.description.$error ? 'error' : null" @blur="$v.project.description.$touch()"></TextArea>

    <div class="ob_Form__actions">
      <Button label="Update Project" mode="basic"></Button>
      <Button :onClick=cancelEdit label="Cancel" mode="negative"></Button>
    </div>
  </form>
  </transition>
</template>

<script>
import Button from "../FormButton/FormButton.vue";
import TextField from "../TextField/TextField.vue";
import TextArea from "../FormTextArea/FormTextArea.vue";
import FormMixin from '../../mixins/form';

import { required } from 'vuelidate/lib/validators';

export default {
  name: "ProjectEditor",
  mixins: [FormMixin],
  components: {
    TextField,
    TextArea,
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
      },
      owner: {
        required
      },
      description: {
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
      const allProjects = this.$store.getters.allProjects;
      const currentlyEditing = this.$store.getters.editing;
      let projectToEdit;

      if(allProjects.length > 0) {
        projectToEdit = allProjects.find(function(project) {
          return project.number === currentlyEditing;
        });

        if(projectToEdit) {
          this.project.number = projectToEdit.number;
          this.project.name = projectToEdit.name;
          this.project.client = projectToEdit.client;
          this.project.owner = projectToEdit.owner;
          this.project.description = projectToEdit.description;
        }
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

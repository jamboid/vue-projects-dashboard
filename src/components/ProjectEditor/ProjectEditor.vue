<template>
<transition name="fade">
  <form v-if="isVisible"  class="cp_ProjectEditor ob_Form" :class="{ 'cp_ProjectEditor--inactive' : !isActive  }" v-on:submit.prevent=handleFormSubmit>
    <div class="cp_ProjectEditor__number">{{ this.projectNumber }}</div>
    <TextField id="name" v-model="project.name" label="Project Name" :status="$v.project.name.$error ? 'error' : null" @blur="$v.project.name.$touch()" @input="$v.project.name.$touch()"></TextField>
    <TextField id="client" v-model="project.client" label="Client" :status="$v.project.client.$error ? 'error' : null" @blur="$v.project.client.$touch()" @input="$v.project.client.$touch()"></TextField>
    <TextField id="owner" v-model="project.owner" label="Owner" :status="$v.project.owner.$error ? 'error' : null" @blur="$v.project.owner.$touch()" @input="$v.project.owner.$touch()"></TextField>
    <TextArea id="description" v-model="project.description" label="Description" :status="$v.project.description.$error ? 'error' : null" @blur="$v.project.description.$touch()" @input="$v.project.description.$touch()"></TextArea>
    <div class="cp_ProjectEditor__formActions ob_Form__actions">
      <Button label="Update Project" mode="basic"></Button>
      <Button :onClick=cancelEdit label="Cancel" mode="negative"></Button>
    </div>
  </form>
  </transition>
</template>

<script>
import Button from "@/components/FormButton/FormButton.vue";
import TextField from "@/components/FormTextField/FormTextField.vue";
import TextArea from "@/components/FormTextArea/FormTextArea.vue";
import FormMixin from '@/mixins/form';
import { required } from 'vuelidate/lib/validators';
import { mapGetters } from 'vuex'

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
      },
      active: false,
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
    ...mapGetters({
      mode: 'mode',
      projectNumber: 'editing',
      allProjects: 'allProjects',
      ticket: 'ticketNumber'
    }),

    isVisible () {
      return this.mode === 'edit' ? true : false;
    },

    isActive () {
      return this.active;
    }
  },
  watch: {
    isVisible: function () {
      if(this.isVisible) {
        this.active = true;
        this.updateFormData();
      } else {
        this.clearForm();
        this.active = false;
      }
    }
  },
  methods: {
    updateFormData: function () {
      const ALL_PROJECTS = this.allProjects;
      const CURRENTLY_EDITING = this.projectNumber;
      let projectToEdit;

      if(ALL_PROJECTS.length > 0) {
        projectToEdit = ALL_PROJECTS.find(function(project) {
          return project.number === CURRENTLY_EDITING;
        });

        if(projectToEdit) {
          this.project.number = projectToEdit.number;
          this.project.name = projectToEdit.name;
          this.project.client = projectToEdit.client;
          this.project.owner = projectToEdit.owner;
          this.project.description = projectToEdit.description;
          this.project.vm = this;
        }
      }
    },

    clearForm: function () {
      this.project.number = null;
      this.project.name = '';
      this.project.client = '';
      this.project.owner = '';
      this.project.description = '';
      this.project.vm = null;
    },

    handleFormSubmit: function () {
      if(this.$v.$anyError || !this.isActive) {
        return;
      }

      this.active = false;

      //this.$store.commit('updateProject', this.project);
      this.$store.dispatch('saveProjectChanges', this.project).then(() => {
        this.active = true;
      });
    },

    cancelEdit: function (e) {
      e.preventDefault();

      if(this.isActive) {
        this.$store.commit('cancelEdit');
      }
    },
  }
}
</script>
<style lang="scss" scoped>
  @import 'ProjectEditor.scss';
</style>

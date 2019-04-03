<template>
  <form class="cp_DisplayPrefs" v-on:change.prevent=updatePrefs>
    <FormCheckbox v-model="prefs.toggle" id="checktest" label="User preference stored locally" :status="null"></FormCheckbox>
  </form>
</template>

<script>
import FormCheckbox from "@/components/FormCheckbox/FormCheckbox";

export default {
  name: "DisplayPrefs",
  components: {
    FormCheckbox
  },
  computed: {
    prefs () {
      return this.$store.getters.prefs;
    },
  },
  methods: {
    updatePrefs: function () {
      this.$store.commit('updatePrefs', this.prefs);
    }
  }
}
</script>

<style lang="scss" scoped>
  @import 'DisplayPrefs.scss';
</style>

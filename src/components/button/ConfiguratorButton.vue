<template>
  <v-btn :loading="configLoader" fab dark large color="blue accent-4" fixed right bottom
         @click="configDialog">
    <v-icon dark>mdi-desktop-classic</v-icon>
  </v-btn>
</template>

<script>
export default {
  name: "ConfiguratorButton",
  methods: {
    configDialog() {
      this.$store.commit('dialog');
    },
  },
  computed: {
    configLoader() {
      return this.$store.getters.getConfigLoader;
    }
  }
}
</script>

<style scoped>

</style>

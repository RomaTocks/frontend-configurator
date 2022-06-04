<template>
  <v-dialog
    :value="config"
    fullscreen
    overflowed
    transition="dialog-bottom-transition"
  >
    <v-card>
      <v-toolbar dark color="primary">
        <v-btn icon dark @click="dialog">
          <v-icon>mdi-close</v-icon>
        </v-btn>
        <v-toolbar-title class="d-none d-sm-flex">Анализ комплектующих</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items>
          <v-btn dark text to="config">
            Перейти на страницу сборки
          </v-btn>
        </v-toolbar-items>
      </v-toolbar>
      <AnalyzeConfigurationBlock/>
    </v-card>
  </v-dialog>
</template>
<script>
import AnalyzeConfigurationBlock from "@/components/configurator/AnalyzeConfigurationBlock";


export default {
  name: "ConfiguratorDialog",
  components: {AnalyzeConfigurationBlock},
  data:() => ({
    loading: false,
  }),
  methods: {
    dialog() {
      this.$store.commit('configurator/dialog');
    },
    loader() {
      this.$store.commit('configurator/dialogLoader')
    }
  },
  computed: {
    configLoader() {
      return this.$store.getters['configurator/dialogLoader'];
    },
    config() {
      return this.$store.getters['configurator/getConfig'];
    },
  }
}
</script>

<style scoped>

</style>

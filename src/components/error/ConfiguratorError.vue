<template>
  <div>
    <v-alert v-if="element === null"
             text
             color="info"
    >
      <h3 class="text-h5">
        Элемент не выбран.
      </h3>
      <div>Для полного анализа выберите все комплектующие.</div>
      <v-divider
        class="my-4 info"
        style="opacity: 0.22"
      ></v-divider>
      <v-row
        align="center"
        no-gutters
      >
        <v-spacer></v-spacer>
        <v-col class="shrink">
          <v-btn
            color="info"
            outlined
          >
            Выбрать
          </v-btn>
        </v-col>
      </v-row>
    </v-alert>
    <v-alert
      text
      prominent
      icon="mdi-cloud-alert"
      :type="error.type"
      :key="i"
      v-for="(error, i) in errors">
      {{error.message}}
    </v-alert>
  </div>
</template>

<script>
export default {
  props: {
    element : Object,
    errors : Array
  },
name: "ConfiguratorError"
}
</script>

<style scoped>

</style>

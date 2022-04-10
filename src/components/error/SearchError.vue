<template>
  <div class="d-flex justify-center align-center" style="height: 500px">
    <div>
      <v-alert
        text
        prominent
        type="info"
        icon="mdi-cloud-alert"
      >
        Ой, мы ничего не нашли по вашему запросу. Попробуйте поменять фильтры!
      </v-alert>
    </div>
  </div>
</template>

<script>
export default {
name: "SearchError"
}
</script>

<style scoped>

</style>

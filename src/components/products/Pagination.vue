<template>
  <v-row justify="center">
    <v-pagination
      v-model="page"
      class="my-4"
      :length="processors.pages"
    ></v-pagination>
  </v-row>
</template>

<script>
export default {
name: "Pagination"
}
</script>

<style scoped>

</style>

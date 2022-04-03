<template>
  <v-row v-if="loading">
    <v-col>
      <v-card :key="n" v-for="n in count" class="mb-4">
        <v-skeleton-loader
          type="article, actions"
        ></v-skeleton-loader>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
name: "CardsLoader",
  props: {
    loading : Boolean,
    count : Number
  }
}
</script>

<style scoped>

</style>

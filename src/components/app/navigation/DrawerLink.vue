<template>
  <v-list-item>
    <v-list-item-icon>
      <v-icon>mdi-home</v-icon>
    </v-list-item-icon>
    <v-list-item-title><router-link class="text-decoration-none" :to="to">{{name}}</router-link></v-list-item-title>
  </v-list-item>
</template>

<script>
export default {
  props : {
    name : String,
    to : Object,
  },
name: "DrawerLink"
}
</script>

<style scoped>

</style>

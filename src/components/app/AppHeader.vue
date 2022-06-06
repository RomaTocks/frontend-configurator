<template>
  <div>
    <NavigationDrawer :drawer="drawer"/>
    <v-app-bar
      sticky
      color="blue accent-4"
      dark
      max-height="64px"
    >
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <img alt="logo" width="25" src="@/assets/logo.png" class="mr-2">
      <v-toolbar-title><router-link style="text-decoration: none; color: white" to="/">Онлайн-конфигуратор</router-link></v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn to="profile" icon>
        <v-icon>mdi-bell</v-icon>
      </v-btn>
      <v-avatar color="white" size="45">
        <span class="black--text text-p">RT</span>
      </v-avatar>
    </v-app-bar>
  </div>
</template>

<script>
import NavigationDrawer from "@/components/app/navigation/NavigationDrawer";
export default {
name: "AppHeader",
  components: {NavigationDrawer},
  data: () =>({
    drawer : false
  })
}
</script>

<style scoped>

</style>

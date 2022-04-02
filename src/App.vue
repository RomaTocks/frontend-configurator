<template>
    <v-app app>
      <v-navigation-drawer
        v-model="drawer"
        absolute
        temporary
      >
        <v-list
          nav
          dense
        >
          <v-list-item-group
            active-class="deep-purple--text text--accent-4"
          >
            <DrawerLink to="cpu" name="Процессоры"/>
            <DrawerLink to="motherboard" name="Материнские платы"/>
            <DrawerLink to="psu" name="Блоки питания"/>
            <DrawerLink to="chassis" name="Корпуса"/>
            <DrawerLink to="ram" name="Оперативная память"/>
            <DrawerLink to="gpu" name="Видеокарты"/>
            <DrawerLink to="fan" name="Кулеры"/>
          </v-list-item-group>
        </v-list>
      </v-navigation-drawer>
      <v-app-bar
        sticky
        color="blue accent-4"
        dark
        max-height="64px"
      >
        <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

        <img width="25" src="@/assets/logo.png" class="mr-2">

        <v-toolbar-title>Онлайн-конфигуратор</v-toolbar-title>

        <v-spacer></v-spacer>

        <v-btn icon>
          <v-icon>mdi-bell</v-icon>
        </v-btn>
        <v-avatar
          color="white"
          size="50"
        > <span class="black--text text-p">36</span></v-avatar>
      </v-app-bar>
      <v-main id="main">
        <v-container id="container">
            <v-row>
            </v-row>
          </v-container>
        <ConfiguratorDialog/>
      </v-main>
      <router-view></router-view>
      <AppFooter/>
      <v-btn :loading="configLoader" fab dark large color="blue accent-4" fixed right bottom
      @click="configDialog">
        <v-icon dark>mdi-desktop-classic</v-icon>
      </v-btn>
    </v-app>
</template>

<script>
import 'vuetify/dist/vuetify.min.css'
import ConfiguratorDialog from "@/components/dialog/ConfiguratorDialog";
import AppFooter from "@/components/main/AppFooter";
import DrawerLink from "@/components/main/DrawerLink";

export default {
  name: 'App',
  data: () =>({
    drawer : false
  }),
  methods: {
    configDialog() {
      this.$store.commit('dialog');
    },
  },
  computed: {
    configLoader() {
      return this.$store.getters.getConfigLoader;
    }
  },
  components: {
    DrawerLink,
    AppFooter,
    ConfiguratorDialog,
  }
}
</script>

<style>
{
font-family: Avenir, Helvetica, Arial, sans-serif;
-webkit-font-smoothing: antialiased;
-moz-osx-font-smoothing: grayscale;
text-align: center;
color: #2c3e50;
}
body {
  margin: 0;
}
</style>

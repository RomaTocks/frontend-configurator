<template>
  <v-navigation-drawer
    :value="drawer"
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
        <DrawerLink :to="{ name : 'cpu' }" name="Процессоры"/>
        <DrawerLink :to="{ name : 'motherboard' }" name="Материнские платы"/>
        <DrawerLink :to="{ name : 'psu' }" name="Блоки питания"/>
        <DrawerLink :to="{ name : 'chassis' }" name="Корпуса"/>
        <DrawerLink :to="{ name : 'ram' }" name="Оперативная память"/>
        <DrawerLink :to="{ name : 'gpu' }" name="Видеокарты"/>
        <DrawerLink :to="{ name : 'fan' }" name="Кулеры"/>
      </v-list-item-group>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import DrawerLink from "@/components/app/navigation/DrawerLink";
export default {
  name: "NavigationDrawer",
  components: {DrawerLink},
  props: {
    drawer: Boolean
  },

}
</script>

<style scoped>

</style>

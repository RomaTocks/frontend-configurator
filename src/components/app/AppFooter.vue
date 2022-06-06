<template>
  <v-footer
    color="blue accent-4"
    dark
    class="mt-10 d-flex justify-center"
  >
    <v-card
      flat
      tile
      class="blue accent-4 lighten-1 white--text text-center"
    >
      <v-card-text class="white--text pt-4">
        <v-row>Проект находится на стадии ранней разработки в рамках темы диплома "Информационная система онлайн-конфигурирования персональных компьютеров"</v-row>
        <v-row justify="center" class="pt-4">Дополнительную информацию можно узнать  в соц. сетях:</v-row>
        <v-row justify="center">
          <v-btn
            icon
            color="white"
        >
          <v-icon>mdi-git</v-icon>
        </v-btn>
          <v-btn
              icon
              color="white"
          >
            <v-icon>mdi-linkedin</v-icon>
          </v-btn>
          <v-btn
              icon
              color="white"
          >
            <v-icon>mdi-at</v-icon>
          </v-btn>
        </v-row>
      </v-card-text>

      <v-divider></v-divider>

      <v-card-text class="white--text">
        {{ new Date().getFullYear() }} — <strong>Онлайн-конфигуратор</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
export default {
  name: "AppFooter"
}
</script>

<style scoped>

</style>

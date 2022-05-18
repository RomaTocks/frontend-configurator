<template>
  <v-container style="max-width: 1200px" fluid class="d-flex flex-column justify-center">
   <v-row class="mb-8 mt-12 d-flex justify-center">
     <v-col class="ml-4 mr-4">
       <v-row class="mt-12 mr-0" justify="start" align="center">
         <h1 style="font-weight: 700" class="text-start">
           СОБРАТЬ КОМПЬЮТЕР СЛОЖНО?
         </h1>
         <h2>
           У нас есть решение.
         </h2>
       </v-row>
       <v-row>
         <p class="text-justify" style="font-size: 20px">
           Онлайн-конфигуратор на базе каталога Onliner.by поможет в процессе сборки персонального компьютера и найдёт наилучшее предложение!
         </p>
       </v-row>
       <v-row class="mt-8 mt-sm-4 mb-8 mb-sm-0" justify="center" justify-sm="start">
         <v-btn x-large color="primary">
           Собрать свой компьютер
         </v-btn>
       </v-row>
     </v-col>
     <v-col class="mt-xs-12 d-flex justify-center align-center">
       <img alt="pics" width="400px" src="@/assets/public/pc.png">
     </v-col>
   </v-row>
    <v-row class="mb-8" justify="center">
        <h1 class="text-center">Преимущества сборки в нашем конфигураторе</h1>
    </v-row>
    <v-row class="d-flex align-stretch justify-center mb-8">
      <v-col class="column-block d-flex flex-column justify-center align-center">
        <v-row justify="center" class="icon-block">
          <v-icon size="75px" color="blue">mdi-cogs</v-icon>
        </v-row>
        <v-row justify="center" class="title-block">
          <h3 class="text-center">Полный анализ комплектующих</h3>
        </v-row>
        <v-row class="text-block">
          <p class="text-center">Система подскажет какие комплектующие не подходят друг к другу, а какие лучше заменить на более производительные</p>
        </v-row>
      </v-col>
      <v-col class="column-block d-flex flex-column justify-start align-center">
        <v-row justify="center" class="icon-block">
          <v-icon size="75px" color="blue">mdi-power-plug</v-icon>
        </v-row>
        <v-row justify="center" class="title-block">
          <h3 class="text-center">Анализ тепловыделения системы</h3>
        </v-row>
        <v-row justify="center" class="text-block">
          <p class="text-center">Один из неочевидных моментов при выборе компьютера это блок питания. Система рассчитает примерное тепловыделение системы и подскажет достаточно питания в системе</p>
        </v-row>
      </v-col>
      <v-col class=" column-block d-flex flex-column justify-start align-center">
        <v-row justify="center" class="icon-block">
          <v-icon size="75px" color="blue">mdi-shopping</v-icon>
        </v-row>
        <v-row justify="center" class="title-block">
          <h3 class="text-center">Поиск оптимального предложения</h3>
        </v-row>
        <v-row justify="center" class="text-block">
          <p class="text-center">На базе каталога Onliner.by будет найдено самое оптимальное по цене предложение на рынке.</p>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "LandingPage"
}
</script>

<style scoped>
 .column-block {
   min-width: 350px;
 }
 .icon-block {
   height: 100px;
 }
 .title-block {
   height: 50px;
 }
 .text-block {
   width: 100%;
   height: 150px;
 }
</style>

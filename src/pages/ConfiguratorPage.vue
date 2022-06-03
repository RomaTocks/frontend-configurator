<template>
  <ComponentsWrapper :header="true" :footer="true" :configuration="false">
    <v-container>
      <v-container>
        <v-row class="pa-6" justify="end">
          <v-btn color="red" class="mr-3" outlined>
            Очистить сборку
          </v-btn>
        </v-row>
      </v-container>
      <v-stepper
        style="box-shadow: none"
        v-model="step"
        vertical
        non-linear
      >
        <v-stepper-step step="1">
          <h2>Анализ комплектующих персонального компьютера</h2>
          <p class="pt-2">Для полного анализа выберите все комплектующие</p>
        </v-stepper-step>
        <v-stepper-content step="1">
          <AnalyzeConfigurationBlock/>
          <v-btn color="primary" @click="step = 2">Продолжить</v-btn>
        </v-stepper-content>
        <v-stepper-step step="2">
          <h2>Выбор магазина комплектующих</h2>
          <p class="pt-2">Выберите оптимальное ценовое предложение</p>
        </v-stepper-step>
        <v-stepper-content step="2">
          <StoreSelectionBlock/>
          <v-btn color="primary" @click="step = 3">Продолжить</v-btn>
          <v-btn @click="step = step - 1" text>Назад</v-btn>
        </v-stepper-content>
        <v-stepper-step step="3">
          <h2>Сохранение сборки персонального компьютера</h2>
          <p class="pt-2">Сохраните сборку в ваш профиль для дальнейшего взаимодействия</p>
        </v-stepper-step>
        <v-stepper-content step="3">
         <SaveConfigurationBlock/>
          <v-btn color="primary" class=" ml-4 pa-4">Сохранить</v-btn>
          <v-btn @click="step = step - 1" text>Назад</v-btn>
        </v-stepper-content>
      </v-stepper>
    </v-container>
  </ComponentsWrapper>
</template>

<script>
import AnalyzeConfigurationBlock from "@/components/configurator/AnalyzeConfigurationBlock";
import ComponentsWrapper from "@/components/wrapper/ComponentsWrapper";
import StoreSelectionBlock from "@/components/configurator/StoreSelectionBlock";
import SaveConfigurationBlock from "@/components/configurator/SaveConfigurationBlock";

export default {
  name: "ConfiguratorPage",
  components: {SaveConfigurationBlock, StoreSelectionBlock, ComponentsWrapper, AnalyzeConfigurationBlock},
  data() {
    return {
      step: 1,
    }
  }
}
</script>

<style scoped>

</style>

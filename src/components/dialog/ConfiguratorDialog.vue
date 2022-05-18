<template>
  <v-dialog
    :value="config"
    fullscreen
    overflowed
    transition="dialog-bottom-transition"
  >
    <v-card>
      <v-toolbar dark color="primary">
        <v-btn icon dark @click="dialog">
          <v-icon>mdi-close</v-icon>
        </v-btn>
        <v-toolbar-title>Конфигурация</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items>
          <v-btn dark text @click="onliner">
            Сохранить
          </v-btn>
        </v-toolbar-items>
      </v-toolbar>
      <v-container>
        <v-row class="pa-4">
          <h2>Процессор</h2>
        </v-row>
        <ConfigurationCard v-if="configuration.cpu !== null || configuration.cpu !== undefined" :product="configuration.cpu"/>
        <ConfiguratorError :element="configuration.cpu" :errors="errors.cpu"/>
        <v-row class="pa-4">
          <h2>Материнская плата</h2>
        </v-row>
        <ConfigurationCard v-if="configuration.motherboard !== null || configuration.motherboard !== undefined" :product="configuration.motherboard"/>
        <ConfiguratorError :element="configuration.motherboard" :errors="errors.motherboard"/>
        <v-row class="pa-4">
          <h2>Оперативная память</h2>
        </v-row>
        <ConfigurationCard v-if="configuration.ram !== null || configuration.ram !== undefined" :product="configuration.ram"/>
        <ConfiguratorError :element="configuration.ram" :errors="errors.ram"/>
        <v-row class="pa-4">
          <h2>Видеокарта</h2>
        </v-row>
        <ConfigurationCard v-if="configuration.graphicCard !== null || configuration.graphicCard !== undefined" :product="configuration.graphicCard"/>
        <ConfiguratorError :element="configuration.graphicCard" :errors="errors.gpu"/>
        <v-row class="pa-4">
          <h2>Блок питания</h2>
        </v-row>
        <ConfigurationCard v-if="configuration.psu !== null || configuration.psu !== undefined" :product="configuration.psu"/>
        <PowerCard/>
        <ConfiguratorError :element="configuration.psu" :errors="errors.psu"/>
        <v-row class="pa-4">
          <h2>Кулер</h2>
        </v-row>
        <ConfigurationCard v-if="configuration.fan !== null || configuration.fan !== null" :product="configuration.fan"/>
        <ConfiguratorError :element="configuration.fan" :errors="errors.fan"/>
        <v-row class="pa-4">
          <h2>Корпус</h2>
        </v-row>
        <ConfigurationCard v-if="configuration.chassis !== null" :product="configuration.chassis"/>
        <ConfiguratorError :element="configuration.chassis" :errors="errors.chassis"/>>
        <v-row class="pa-4">
          <h2>Итого</h2>
        </v-row>
      </v-container>
    </v-card>
  </v-dialog>
</template>

<script>
import axios from "axios";
import ConfigurationCard from "@/components/card/ConfigurationCard";
import ConfiguratorError from "@/components/error/ConfiguratorError";
import PowerCard from "@/components/card/PowerCard";

export default {
  name: "ConfiguratorDialog",
  components: {PowerCard, ConfiguratorError, ConfigurationCard},
  data:() => ({
    loading: false,
    errors: {},
    configuration : {
      cpu : null,
      graphicCard: null,
      chassis : null,
      psu : null,
      motherboard:null,
      fan: null,
      ram: null,

    }
  }),
  watch : {
    currentProcessor: function (newProc) {
      if(newProc != null) {
        this.configuration.cpu = {
          id: newProc
        };
      }
      else {
        this.configuration.cpu = newProc;
      }
      this.loader();
      this.configure();
    },
    currentGraphicCard: function (newGpu) {
      if(newGpu != null) {
        this.configuration.graphicCard = {
          id: newGpu
        };
      }
      else {
        this.configuration.graphicCard = newGpu;
      }
      this.loader();
      this.configure();
    },
    currentChassis: function (newChassis) {
      if(newChassis != null) {
        this.configuration.chassis = {
          id: newChassis
        };
      }
      else {
        this.configuration.chassis = newChassis;
      }
      this.loader();
      this.configure();
    },
    currentMotherboard: function (newMother) {
      if(newMother != null) {
        this.configuration.motherboard = {
          id: newMother
        };
      }
      else {
        this.configuration.motherboard = newMother;
      }
      this.loader();
      this.configure();
    },
    currentFan: function (newFan) {
      if(newFan != null) {
        this.configuration.fan = {
          id: newFan
        };
      }
      else {
        this.configuration.fan = newFan;
      }
      this.loader();
      this.configure();
    },
    currentPSU: function (newPSU) {
      if(newPSU != null) {
        this.configuration.psu = {
          id: newPSU
        };
      }
      else {
        this.configuration.psu = newPSU;
      }
      this.loader();
      this.configure();
    },
    currentRam: function (newRam) {
      if(newRam != null) {
        this.configuration.ram = {
          id: newRam
        };
      }
      else {
        this.configuration.ram = newRam;
      }
      this.loader();
      this.configure();
    },
  },
  methods: {
    onliner() {
      axios.post('https://catalog.onliner.by/sdapi/cart.api/positions', {position_id : "18508:2920366001", product_id:2920366,product_key:"balance2022y",shop_id:18508,quantity:1})
    },
    configure() {
      axios.post(`http://localhost:9000/config`, this.configuration, {headers: {"Access-Control-Allow-Origin": "*"}}).then(response => {
        this.configuration = response.data.configuration
        this.errors = response.data.error
        this.loader();
      }).catch(() => {})
    },
    dialog() {
      this.$store.commit('configurator/dialog');
    },
    loader() {
      this.$store.commit('configurator/dialogLoader')
    }
  },
  computed: {
    configLoader() {
      return this.$store.getters['configurator/dialogLoader'];
    },
    currentProcessor() {
      return this.$store.getters['cpu/getCurrent'];
    },
    currentGraphicCard() {
      return this.$store.getters['gpu/getCurrent']
    },
    currentChassis() {
      return this.$store.getters['chassis/getCurrent'];
    },
    currentRam() {
      return this.$store.getters['ram/getCurrent']
    },
    currentMotherboard() {
      return this.$store.getters['motherboard/getCurrent']
    },
    currentPSU() {
      return this.$store.getters['psu/getCurrent']
    },
    currentFan() {
      return this.$store.getters['fan/getCurrent']
    },
    config() {
      return this.$store.getters['configurator/getConfig'];
    },
  }
}
</script>

<style scoped>

</style>

<template>
  <v-card style="box-shadow: none" v-if="!loading">
    <v-container>
      <v-row class="pa-4">
        <h2>Процессор</h2>
      </v-row>
      <ConfigurationCard changePath="cpu" v-if="configuration.cpu !== null || configuration.cpu !== undefined" :product="configuration.cpu"/>
      <ConfiguratorError to="cpu" :element="configuration.cpu" :errors="errors.cpu"/>
      <v-row class="pa-4">
        <h2>Материнская плата</h2>
      </v-row>
      <ConfigurationCard changePath="motherboard" v-if="configuration.motherboard !== null || configuration.motherboard !== undefined" :product="configuration.motherboard"/>
      <ConfiguratorError to="motherboard" :element="configuration.motherboard" :errors="errors.motherboard"/>
      <v-row class="pa-4">
        <h2>Оперативная память</h2>
      </v-row>
      <ConfigurationCard changePath="ram" v-if="configuration.ram !== null || configuration.ram !== undefined" :product="configuration.ram"/>
      <ConfiguratorError to="ram" :element="configuration.ram" :errors="errors.ram"/>
      <v-row class="pa-4">
        <h2>Видеокарта</h2>
      </v-row>
      <ConfigurationCard changePath="gpu" v-if="configuration.graphicCard !== null || configuration.graphicCard !== undefined" :product="configuration.graphicCard"/>
      <ConfiguratorError to="gpu" :element="configuration.graphicCard" :errors="errors.gpu"/>
      <v-row class="pa-4">
        <h2>Блок питания</h2>
      </v-row>
      <ConfigurationCard changePath="psu" v-if="configuration.psu !== null || configuration.psu !== undefined" :product="configuration.psu"/>
      <PowerCard/>
      <ConfiguratorError to="psu" :element="configuration.psu" :errors="errors.psu"/>
      <v-row class="pa-4">
        <h2>Кулер</h2>
      </v-row>
      <ConfigurationCard changePath="fan" v-if="configuration.fan !== null || configuration.fan !== null" :product="configuration.fan"/>
      <ConfiguratorError to="fan" :element="configuration.fan" :errors="errors.fan"/>
      <v-row class="pa-4">
        <h2>Корпус</h2>
      </v-row>
      <ConfigurationCard changePath="chassis" :change="this.currentChassis" v-if="configuration.chassis !== null" :product="configuration.chassis"/>
      <ConfiguratorError to="chassis" :element="configuration.chassis" :errors="errors.chassis"/>
      <v-row class="pa-4" justify="start">
        <h3 class="d-flex">Итого:</h3>
      </v-row>
      <v-col class="pa-1">
        <p><strong class="green--text">{{minPrice}}</strong> руб. - минимальная цена конфигурации</p>
        <p><strong class="red--text">{{maxPrice}} </strong>руб. - максимальная цена конфигурации</p>
      </v-col>
    </v-container>
  </v-card>
  <div v-else>
    <v-progress-circular
      :size="50"
      color="primary"
      indeterminate
    ></v-progress-circular>
  </div>
</template>
<script>
import ConfigurationCard from "@/components/card/ConfigurationCard";
import ConfiguratorError from "@/components/error/ConfiguratorError";
import PowerCard from "@/components/card/PowerCard";
import axios from "axios";

export default {
  name: "AnalyzeConfigurationBlock",
  components: {PowerCard, ConfiguratorError, ConfigurationCard},
  data:() => ({
    loading: false,
    errors: {},
    configuration: {
      cpu: null,
      graphicCard: null,
      chassis: null,
      psu: null,
      motherboard: null,
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
  mounted() {
    this.configuration = {
      cpu: this.setId(this.currentProcessor),
      graphicCard: this.setId(this.currentGraphicCard),
      chassis: this.setId(this.currentChassis),
      psu: this.setId(this.currentPSU),
      motherboard: this.setId(this.currentMotherboard),
      fan: this.setId(this.currentFan),
      ram: this.setId(this.currentRam),
    };
    this.loader();
    this.configure();
  },
  methods: {
    setId(id) {
      if(id !== null) {
        return {id: id}
      }
      return  null;
    },
    configure() {
      axios.post(`http://localhost:9000/config`, this.configuration, {headers: {"Access-Control-Allow-Origin": "*"}}).then(response => {
        this.configuration = response.data.configuration
        this.errors = response.data.error
        this.loader();
      }).catch(() => {})
    },
    loader() {
      this.$store.commit('configurator/dialogLoader')
    }
  },
  computed: {
    minPrice() {
      let minSum = 0;
      for (let element in this.configuration) {
        if (this.configuration[element] !== null) {
          if (this.configuration[element].prices !== null) {
            minSum += this.configuration[element].prices.price_min.value;
          }
        }
      }
      return minSum;
    },
    maxPrice() {
      let maxSum = 0;
      for (let element in this.configuration) {
        if (this.configuration[element] !== null) {
          if (this.configuration[element].prices !== null) {
            maxSum += this.configuration[element].prices.price_max.value;
          }
        }
      }
      return maxSum;
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
    }
  }
}
</script>

<style scoped>

</style>

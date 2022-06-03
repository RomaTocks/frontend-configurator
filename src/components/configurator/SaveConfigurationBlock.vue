<template>
  <v-container>
    <v-text-field
      label="Название"
      placeholder="Введите название сборки"
      filled
      rounded
      dense
    ></v-text-field>
    <v-simple-table >
      <template v-slot:default>
        <thead>
        <tr>
          <th style="font-size: 20px" class="text-left">
            Тип элемента
          </th>
          <th style="font-size: 20px" class="text-left">
            Элемент
          </th>
          <th style="font-size: 20px">
            Продавец
          </th>
          <th style="font-size: 20px">
            Цена
          </th>
        </tr>
        </thead>
        <tbody>
        <tr
          v-for="item in getArrayOfSavingItems"
          :key="item.name"
        >
          <td style="font-size: 18px">{{ item.type}}</td>
          <td style="font-size: 18px">{{ item.name }}</td>
          <td style="font-size: 18px">{{item.shop}}</td>
          <td style="font-size: 18px; font-weight: bold">{{item.price}} руб.</td>
<!--          <td>{{getShop(item).title}}</td>-->
<!--          <td>{{getShop(item).position_price.amount}} руб.</td>-->
        </tr>
        </tbody>
      </template>
    </v-simple-table>
    <v-row justify="end" class="pa-4">
      <h2>Итого: 20128,41 руб.</h2>
    </v-row>
  </v-container>
</template>

<script>
import axios from "axios";

export default {
name: "SaveConfigurationBlock",
  data:() => ({
    loading: false,
    errors: {},
    configMapper: {
      cpu: 'Процессор',
      graphicCard: 'Видеокарта',
      chassis: 'Корпус',
      psu: 'Блок питания',
      motherboard: 'Материнская плата',
      fan: 'Вентилятор',
      ram: 'Оперативная память',
    },
    localPath: '',
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
    setLocalPath(path) {
      if(path === 'graphicCard') {
        path = 'gpu';
      }
      this.localPath = path;
    },
    // getShop(path) {
    //   let id = this.$store.getters[path + '/getCurrentShop'];
    //   if (this.configuration[path] !== null) {
    //     if (this.configuration[path].positions !== null) {
    //       return this.configuration[path].positions.find(value => value.id === id);
    //     }
    //   }
    //   return null;
    // },
    setId(id) {
      if(id !== null) {
        return {id: id}
      }
      return  null;
    },
    configure() {
      this.loader();
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
    getArrayOfSavingItems() {
      let savingArray = [];
      for (let item in this.configuration) {
        if(this.configuration[item] !== null) {
          let newElement = {};
          newElement.type = this.configMapper[item];
          newElement.name = this.configuration[item].name;
          if( this.configuration[item] !== undefined && this.configuration[item].positions !== undefined) {
            this.setLocalPath(item);
            let currentPosition = this.configuration[item].positions.find(value => value.id === this.getShop)
            if(currentPosition !== undefined) {
              newElement.shop = currentPosition.title;
              newElement.price = currentPosition.position_price.amount
            }
          }
         // newElement.price = this.getShop(item).position_price.amount;
          savingArray.push(newElement)
        }
      }
      return savingArray;
    },
    getShop() {
      return this.$store.getters[this.localPath + '/getCurrentShop']
    },
    load() {
      return this.$store.getters['configurator/getConfigLoader']
    },
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

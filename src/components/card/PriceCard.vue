<template>
  <div v-if="product !== null" style="max-width: 1385px" class="mb-3">
    <v-card max-width="1385px" class="mb-2 d-flex pa-4 align-center">
      <v-container>
        <v-row class="pb-2">
          <v-col class="pa-0 d-flex justify-start">
            <router-link class="text-decoration-none" style="color: black" :to="'/' + changePath + '/' + product.id"><h4>{{ product.name }}</h4></router-link>
          </v-col>
          <v-col class="pa-0 d-flex justify-end">
            <v-btn @click="removeCurrent" icon><v-icon>mdi-delete</v-icon></v-btn>
          </v-col>
        </v-row>
        <v-row justify="center">
          <v-col class=" pa-0 align-self-start">
            <v-img v-if="product.images.header !== undefined || product.images.header !== null"
                   width="100px"
                   contain
                   :lazy-src="product.images.header"
                   :src="product.images.header"
            ></v-img>
          </v-col>
          <v-col class="d-flex flex-column">
            <v-row>
              <p class="text-justify">{{ product.description }}</p>
            </v-row>
            <v-row class="d-flex align-self-end justify-end">
              <v-btn @click="changeProduct">Изменить</v-btn>
            </v-row>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
    <v-card v-if="getShopId === null" @click="dialogState" class="pa-4">
      Выбрать магазин
    </v-card>
    <PositionCard :change="true" :change-path="changePath" :position="this.getShop"/>
    <PriceDialog :path="changePath" :positions="product.positions"/>
  </div>
</template>

<script>
import PriceDialog from "@/components/dialog/PriceDialog";
import PositionCard from "@/components/card/PositionCard";
export default {
  name: "PriceCard",
  components: {PositionCard, PriceDialog},
  props: {
    product: Object,
    changePath: String
  },
  methods: {
    dialogState() {
      this.$store.commit(this.changePath + '/setConfigFilter')
    },
    removeCurrent() {
      this.$store.commit(this.changePath + '/setCurrent', this.product.id)
    },
    changeProduct() {
      this.$store.commit('configurator/closeDialog');
      this.$router.push(this.changePath)
    },
  },
  computed : {
    getShop() {
      return this.product.positions.find(value => value.id === this.$store.getters[this.changePath +'/getCurrentShop'])
    },
    getShopId() {
      return this.$store.getters[this.changePath +'/getCurrentShop'];
    }

  }
}
</script>

<style scoped>

</style>

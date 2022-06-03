<template>
  <div style="max-width: 1385px" class="mb-3">
    <h3 v-if="minPrice" class="green--text">Самое выгодное предложение!</h3>
    <h3 v-if="maxPrice" class="red--text">Самое невыгодное предложение :(</h3>
    <v-card :style="getColor()" max-width="1385px" class="d-flex pa-4 align-center">
      <v-container>
        <v-row class="pb-2">
          <v-col class="pa-0 d-flex justify-end">
          <p style="font-size: 12px">Информация о импортёре</p>
          </v-col>
        </v-row>
        <v-row justify="center">
          <v-col class=" pa-0 align-self-start">
            <v-img
                   width="100px"
                   contain
                   :lazy-src="position.logo"
                   :src="position.logo"
            ></v-img>
          </v-col>
          <v-col class="d-flex flex-column">
            <v-row class="pb-4" justify="end">
              <h3 class="orange--text text-end">{{ position.position_price.amount }} руб.</h3>
            </v-row>
            <v-row class="d-flex align-self-end justify-end">
              <v-btn v-if="change" @click="dialogState">Изменить</v-btn>
              <v-btn v-else @click="setPosition">Выбрать</v-btn>
            </v-row>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
  </div>
</template>

<script>
export default {
name: "PositionCard",
  props: {
    change: Boolean,
    minPrice: Boolean,
    maxPrice: Boolean,
    position:Object,
    changePath:String
  },
  methods: {
    setPosition() {
      this.$store.commit(this.changePath + '/setCurrentShop', this.position.id)
    },
    getColor() {
      if(this.minPrice) {
        return "border: lightgreen 2px solid"
      }
      if(this.maxPrice) {
        return "border: red 2px solid"
      }
    },
    removeCurrent() {
      this.$store.commit(this.changePath + '/setCurrent', this.product.id)
    },
    changeProduct() {
      this.$store.commit('configurator/closeDialog');
      this.$router.push(this.changePath)
    },
    dialogState() {
      this.$store.commit(this.changePath + '/setConfigFilter')
    },
  }
}
</script>

<style scoped>

</style>

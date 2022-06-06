<template>
  <div class="d-flex align-center justify-center mb-3">
    <v-card width="1385px" class="d-flex pa-4 align-center">
      <v-container>
        <v-row justify="start">
          <router-link class="text-decoration-none" style="color: black" :to="'/' + path + '/' + product.id"><h4>{{ product.name }}</h4></router-link>
        </v-row>
        <v-row justify="center">
          <v-col class="align-self-center" cols="5">
            <v-img
              max-width="200px"
              contain
              :lazy-src="product.images.header"
              :src="product.images.header"
            ></v-img>
          </v-col>
          <v-col>
            <v-row class="mb-2" justify="end" align="center">
              <v-rating
                :value=Math.ceil(product.reviews.rating/10)
                background-color="grey darken-3"
                color="yellow accent-4"
                half-increments
                readonly
                size="18"
              ></v-rating>
              <h4>{{product.reviews.rating/10}} ({{product.reviews.count}} отзывов)</h4>
            </v-row>
            <v-row>
              {{ product.description }}
            </v-row>
          </v-col>
        </v-row>
        <v-row justify="space-between" align="end">
          <v-col align="center">
            <v-row align="center" >
              <h4 class="mr-2">от {{ product.prices.price_min.value }} руб.</h4><v-btn color="primary">{{ product.prices.offers.count }} предложений</v-btn>
            </v-row>
          </v-col>
          <v-col>
            <v-row align="end" justify="end">
              <v-btn :color="current === product.id ? 'red' : 'blue'" @click="card(product.id)">{{ current === product.id ? "В сборке" : 'В сборку' }}</v-btn>
            </v-row>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
  </div>
</template>

<script>
export default {
name: "ProductCard",
  props:{
    path:String,
    card:Function,
    product:Object,
    current:String
  },
}
</script>

<style scoped>

</style>

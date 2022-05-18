<template>
  <div v-if="product !== null || product !== undefined" style="max-width: 1385px" class="mb-3">
    <v-card max-width="1385px" class="d-flex pa-4 align-center">
      <v-container>
        <v-row justify="start">
          <h4>{{ product.name }}</h4>
        </v-row>
        <v-row justify="center">
          <v-col class="align-self-center" cols="5">
            <v-img v-if="product.images.header !== undefined"
              max-width="200px"
              contain
              :lazy-src="product.images.header"
              :src="product.images.header"
            ></v-img>
          </v-col>
          <v-col>
            <v-row class="mb-2" justify="end" align="center">
              <v-rating
                :value=product.reviews.rating/10
                background-color="grey darken-3"
                color="yellow accent-4"
                half-increments
                readonly
                empty-icon="mdi-star-outline"
                full-icon="mdi-star"
                half-icon="mdi-star-half-full"
                size="18"
              ></v-rating>
              <h4>{{product.reviews.rating/10}} | {{product.reviews.count}}</h4>
            </v-row>
            <v-row>
              {{ product.description }}
            </v-row>
          </v-col>
        </v-row>
        <v-row justify="space-between" align="end">
          <h4 class="mr-2">от {{ product.prices.price_min.value }} руб.</h4>
          <v-btn color="primary">{{ product.prices.offers.count }} предложений</v-btn>
        </v-row>
      </v-container>
    </v-card>
  </div>
</template>

<script>
export default {
name: "ConfigurationCard",
  props: {
    product:Object,
  }
}
</script>

<style scoped>

</style>

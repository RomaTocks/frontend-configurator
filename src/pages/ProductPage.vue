<template>
  <ComponentsWrapper :header="true" :configuration="true" :footer="true">
    <v-container v-if="product !== null">
      <v-row class="pl-8">
        <h1 class="mt-8">{{product.name}}</h1>
        <!--      <v-col class="pa-2 mt-8">-->
        <!--        <v-row justify="end" align="end">-->
        <!--          <v-btn>Посмотреть на Onliner</v-btn>-->
        <!--        </v-row>-->
        <!--      </v-col>-->
      </v-row>
      <v-row class="pl-6" justify="start" align="center">
        <v-rating
          :value=product.reviews.rating/10
          background-color="grey darken-3"
          color="yellow accent-4"
          half-increments
          readonly
          size="18"
        ></v-rating>
        <h4>{{product.reviews.rating/10}}, {{product.reviews.count}} отзывов</h4>
      </v-row>
      <v-row>
        <v-item-group class="ml-8" active-class="primary">
          <v-container style="width: 90px" fluid>
            <v-row style="width: 90px" v-for="url in product.images.images"
                   :key="url">
              <v-item class=" ml-0 mr-0 mt-3"
                      v-slot="{ toggle }">
                <v-card
                  class="d-flex align-center"
                  dark
                  height="75"
                  width="75"
                  @click="toggle; img = url"
                >
                  <v-scroll-y-transition>
                    <img height="75" width="75" :src="url">
                  </v-scroll-y-transition>
                </v-card>
              </v-item>
            </v-row>
          </v-container>
        </v-item-group>
        <v-col >
          <v-scroll-y-transition>
            <img width="200" :src="img">
          </v-scroll-y-transition>
        </v-col>
        <v-col class="pa-4 ma-2">
          <h4>Основные характеристики:</h4>
          <p>{{product.description}}</p>
        </v-col>
        <v-col>
          <v-container fluid>
            <v-card  min-width="300px" max-width="400x" class=" justify-center d-flex pa-4">
              <v-container>
                <v-row class="justify-start">
                  <h2>{{product.prices.price_min.amount}} - {{product.prices.price_max.amount}} руб.</h2>
                </v-row>
                <v-row>
                  <h3>Предложений: {{product.prices.offers.count}}</h3>
                </v-row>
                <v-row class="justify-center">
                  <v-btn width="100%" color="primary">Добавить в сборку</v-btn>
                </v-row>
                <v-row>
                  <v-col>
                    <v-btn
                      icon
                      color="pink"
                    >
                      <v-icon>mdi-heart</v-icon>
                    </v-btn>
                  </v-col>
                </v-row>
              </v-container>
            </v-card>
          </v-container>
        </v-col>
      </v-row>
      <v-row class="d-flex mt-12">
        <v-tabs
          v-model="tab"
          icons-and-text
        >
          <v-tabs-slider></v-tabs-slider>

          <v-tab  style="width: 200px" href="#additional">
            Дополнительная информация
            <v-icon>mdi-information-outline</v-icon>
          </v-tab>

          <v-tab  style="width: 200px" href="#sellers">
            Предложения
            <v-icon>mdi-store</v-icon>
          </v-tab>
        </v-tabs>
        <v-tabs-items style="width: 100%" v-model="tab" >
          <v-tab-item :value="'additional'">
            <v-card flat>
              <v-simple-table>
                <template v-slot:default>
                  <thead>
                  <tr>
                    <th class="text-left">
                      Характеристики
                    </th>
                    <th class="text-left">
                      Значение
                    </th>
                  </tr>
                  </thead>
                  <tbody v-if="additional !== null && product !== null">
                  <tr
                    v-for="(item, key) of additional"
                    :key="key"
                  >
                    <td>
                      {{key}}
                    </td>
                    <td>
                      {{product.additional[item]}}
                    </td>
                  </tr>
                  </tbody>
                </template>
              </v-simple-table>
            </v-card>
          </v-tab-item>
          <v-tab-item :value="'sellers'">
            Продавцы
            <v-simple-table>
              <thead>
              <tr>
                <th class="text-left">
                  Name
                </th>
                <th class="text-left">
                  Calories
                </th>
              </tr>
              </thead>
              <tbody>
              <tr
                v-for="(item, key) in additional"
                :key="key"
              >
                <td>{{ key}}</td>
                <td>{{ item }}</td>
              </tr>
              </tbody>
            </v-simple-table>
          </v-tab-item>
        </v-tabs-items>
      </v-row>
    </v-container>
  </ComponentsWrapper>
</template>

<script>
import axios from "axios";
import ComponentsWrapper from "@/components/wrapper/ComponentsWrapper";

export default {
  name: "ProductPage",
  components: {ComponentsWrapper},
  props:{
    path:String
  },
  data: () => ({
    product:null,
    img:null,
    tab:'additional',
    additional: null,
  }),
  mounted() {
    this.getProductAdditional();
    this.getProduct()

  },
  methods: {
    getProductAdditional() {
      axios.get(`http://localhost:9000/api/` + this.path + `/additional`,
          {
            headers:{
              "Access-Control-Allow-Origin": "*"
            }
          })
          .then(response => {
            this.additional = response.data
          })
    },
    getProduct() {
      axios.get(`http://localhost:9000/api` + this.$route.fullPath,
        {
          headers:{
            "Access-Control-Allow-Origin": "*"
          }
        })
        .then(response => {
          this.product = response.data;
          this.img = this.product.images.images[0]
          //this.setLoading(false);
          //this.setError(false);
        })
        .catch(() => {
          //this.setError(true);
        })
    }

  },
}
</script>

<style scoped>

</style>

<template>
  <v-row justify="center">
    <v-expand-transition>
      <v-container>
        <FiltersDialog
          :set-error="setError"
          :set-page="setPage"
          :get-products="getProcessors"
          :products="path"
        />
        <SearchBanner
          :products = "path"
          :set-error="setError"
          :get-products="getProcessors"
        />
        <SearchError v-if="searchError"/>
        <v-row>
          <v-col>
            <v-select
              :items="pageSizes"
              v-model="selectedSize"
              label="Solo field"
              solo
            ></v-select>
          </v-col>
          <v-col>
            <v-select
              :items="pageSizes"
              v-model="selectedSize"
              label="Solo field"
              solo
            ></v-select>
          </v-col>
        </v-row>
        <v-row
          align="center"
          justify="space-between"
        >
          <v-col v-if="!loading && !searchError">
            <ProductCard
              :path="path"
              :current="currentProduct"
              :card="setProductCurrent"
              :product="product"
              :key="product.id"
              v-for="product in products.products"
            />
          </v-col>
        </v-row>
        <CardsLoader
          :loading="loading && !searchError"
          :count="selectedSize"
        />
        <v-container style="max-width: 1385px">
          <v-row  justify="center">
            <v-pagination
                :disabled="loading"
                v-model="page"
                class="my-4"
                :length="products.pages"
            ></v-pagination>
          </v-row>
        </v-container>
      </v-container>
    </v-expand-transition>
  </v-row>
</template>

<script>
/* eslint-disable vue/no-deprecated-destroyed-lifecycle */
import axios from "axios";
import CardsLoader from "@/components/card/CardsLoader";
import ProductCard from "@/components/card/ProductCard";
import SearchBanner from "@/components/products/SearchBanner";
import FiltersDialog from "@/components/dialog/FiltersDialog";
import SearchError from "@/components/error/SearchError";
export default {
name: "ProductsContainer",
  props: {
    path : String,
  },
  data:() => ({
    searchError : false,
    currentFilters:{},
    products: {},
    page: 1,
    selectedSize : 10,
    pageSizes : [10, 25, 50],
  }),
  methods : {
    setError(value) {
      this.searchError = value;
    },
    getProcessors() {
      axios.get(`http://localhost:9000/api/dynamic` + this.$route.fullPath,
        {
          signal: this.controller.signal,
          headers:{
            "Access-Control-Allow-Origin": "*"
          }
        })
        .then(response => {
          this.products = response.data;
          this.setLoading(false);
          this.setError(false);
        })
        .catch(() => {
          this.setError(true);
        })
    },
    setCurrent(current) {
      this.setProductCurrent(current)
      this.$store.commit("currentProcessor", current)
    },
    setProductCurrent(current) {
      this.$store.commit(this.path + '/setCurrent', current);
    },
    setLoading(payload) {
      this.$store.commit("setProductsLoading", payload);
    },
    setCurrentFilters(payload) {
      this.$store.commit("filters/setCurrentFilters", payload)
    },
    setPage(page) {
      this.page = page;
    },
  },
  computed: {
    controller() {
      return this.$store.getters.getController;
    },
    currentProduct() {
      return this.$store.getters[this.path + '/getCurrent']
    },
    loading() {
      return this.$store.getters.getProductsLoading;
    },
    getCurrentFilters() {
      this.setPage(this.$store.getters["filters/getCurrentFilters"].page)
      return this.$store.getters["filters/getCurrentFilters"];
    }
  },
  watch:{
    page: function(newPage) {
      this.$vuetify.goTo("#app", this.options)
      this.$router.push("/");
      let currentFilters = this.getCurrentFilters;
      currentFilters.page = newPage;
      this.setCurrentFilters(currentFilters);
      currentFilters = this.getCurrentFilters;
      this.$router.push({ name:this.path, query:currentFilters})
      this.setLoading(true);
      this.getProcessors();
    }
  },
  components: {
    SearchError,
    FiltersDialog,
    SearchBanner,
    CardsLoader,
    ProductCard,
  },

}
</script>

<style scoped>

</style>

<template>
  <v-banner class="d-flex justify-center"
            sticky
            shaped>
    <v-container style="max-width: 1385px"  class="justify-center">
      <v-row align="start" justify="center">
        <v-text-field
          v-model="search"
          v-on:change="setSearchInStore"
          rounded
          solo
          :disabled="loading"
          class="mt-4 mb-4"
          label="Поиск"
          prepend-inner-icon="mdi-magnify"
        >
          <v-icon color="green">mdi-minus</v-icon>
        </v-text-field>
        <v-btn style="width: 48px; height: 48px" class="mt-4 mb-4 ml-2 mr-2" fab :loading="loading" @click="setFilter"><v-icon>mdi-filter</v-icon></v-btn>
      </v-row>
    </v-container>
  </v-banner>
</template>

<script>
export default {
name: "SearchBanner",
  props: {
    products:String,
    getProducts : Function,
    setError : Function
  },
  data:() => ({
    search:"",
  }),
  methods : {
    setFilter() {
      this.$store.commit(this.products + "/setFilter")
    },
    setSearchInStore() {
      this.setError(false);
      this.$router.push("/");
      let currentFilters = this.getCurrentFilters;
      currentFilters.name = this.search;
      if(currentFilters.name === "") {
        delete currentFilters.name;
      }
      this.$store.commit("filters/setCurrentFilters", currentFilters)
      currentFilters = this.getCurrentFilters;
      this.$router.push({ name:this.products, query:currentFilters})
      this.setProductLoading(true)
      this.getProducts();
    },
    setProductLoading(payload) {
      this.$store.commit("setProductsLoading", payload);
    }
  },
  computed : {
    getCurrentFilters() {
      return this.$store.getters["filters/getCurrentFilters"];
    },
    loading() {
      return this.$store.getters["filters/getFilterLoading"];
    }
  },
  mounted() {
   let query = this.$route.query;
   this.search = query.name;
  }

}
</script>

<style scoped>

</style>

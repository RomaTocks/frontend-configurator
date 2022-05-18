<template>
  <v-dialog
    :value="filter"
    transition="dialog-top-transition"
    width="1000px"
    persistent
    @click:outside="this.dialogState"
    @keydown.esc="this.dialogState"
  >
    <v-card>
      <v-card-title class="text-h5 grey lighten-2">
        Фильтры
      </v-card-title>
      <v-container class="pa-4" style="max-width: 1000px">
        <div :key="filter.parameterName" v-for="filter in filters">
          <v-row v-if="filter.type ==='in'" class="ml-4 mr-4">
            <v-select
              :label="filter.name"
              deletable-chips
              chips
              multiple
              v-on:change="setQuery()"
              v-model="currentFilters[filter.parameterName]"
              :items="filter.values"
            ></v-select>
          </v-row>
          <div v-if="filter.type === 'range'">
              <v-row class="ml-1 mr-1">
                <v-col>
                  <v-text-field
                    :hint="filter.name"
                    persistent-hint
                    v-model="currentFilters[filter.parameterName + '_min']"
                    v-on:change="setQuery()"
                    type="Number"
                    :placeholder="filter.min.toString()"
                  />
                </v-col>
                <v-col>
                  <v-text-field
                    v-model="currentFilters[filter.parameterName + '_max']"
                    v-on:change="setQuery()"
                    type="Number"
                    :min="filter.min"
                    :max="filter.max"
                    :placeholder="filter.max.toString()"
                  />
                </v-col>
              </v-row>
          </div>
        </div>
      </v-container>
      <v-divider></v-divider>
    </v-card>
  </v-dialog>
</template>

<script>
/* eslint-disable vue/no-deprecated-destroyed-lifecycle */
import axios from "axios";
export default {
  name: "FiltersDialog",
  props: {
    products:String,
    getProducts : Function,
    setPage : Function,
    setError : Function,
  },
  data:() => ({
    filters:[],
    currentFilters:{},
  }),
  methods: {
    getFilters() {
       return axios.get(`http://localhost:9000/api/filters/` + this.products,{
         signal:this.controller.signal,
         headers:{"Access-Control-Allow-Origin": "*"}})
          .then(response => {
            this.setController();
            this.setFilterLoading(false);
            this.filters = response.data;
            return response.data;
          })
        },
    setLocalCurrentFilters(filters) {
      this.currentFilters = filters;
    },
    setQuery() {
      this.setError(false);
      this.$router.push("/")
      let currentFilters = this.currFilters;
      for (let currentFiltersKey in this.currentFilters) {
        if(currentFilters[currentFiltersKey] === "") {
          delete currentFilters[currentFiltersKey];
        }
        else {
          this.$set(this.currentFilters, currentFiltersKey, this.currentFilters[currentFiltersKey])
          currentFilters[currentFiltersKey] = this.currentFilters[currentFiltersKey]
        }
      }
      currentFilters.page = 1;
      this.setPage(1);
      this.setCurrentFilters(currentFilters)
      this.$router.push({name:this.products, query:this.currFilters})
      this.setProductLoading(true)
      this.getProducts()
    },
    dialogState() {
      this.$store.commit(this.products + '/setFilter')
    },
    setProductLoading(payload) {
      this.$store.commit("setProductsLoading", payload);
    },
    setFilterLoading(payload) {
      this.$store.commit("filters/setFilterLoading", payload);
    },
    setCurrentFilters(payload) {
      this.$store.commit("filters/setCurrentFilters", payload)
    },
    setController() {
      this.$store.commit('setController')
    }
  },
  computed: {
    controller() {
      return this.$store.getters.getController;
    },
    filter() {
      return this.$store.getters[this.products+'/getFilter']
    },
    loading() {
      return this.$store.getters["filters/getFilterLoading"];
    },
    currFilters() {
      this.setLocalCurrentFilters(this.$store.getters["filters/getCurrentFilters"])
      return this.$store.getters["filters/getCurrentFilters"];
    },

  },
  mounted() {
    this.setProductLoading(true);
    this.setFilterLoading(true);
    this.getFilters().then(filters => {
      let currentFilters = this.$route.query;
      currentFilters['size'] = 10;
      currentFilters['page'] = 1
      for (let currentFiltersKey in currentFilters) {
        if(currentFilters[currentFiltersKey] === "") {
          delete currentFilters[currentFiltersKey];
        }
        let queryFilterValue = currentFilters[currentFiltersKey];
        if(currentFiltersKey !== 'size'
          && currentFiltersKey !== 'page'
          && !currentFiltersKey.endsWith("_min")
          && !currentFiltersKey.endsWith("_max")
          && currentFiltersKey !== 'name') {
          let array = [];
          if(Array.isArray(queryFilterValue)) {
            queryFilterValue.forEach(value => {
              array.push(value);
            })
          }
          else {
            array.push(queryFilterValue)
          }
          console.log(filters,1)
          queryFilterValue = array;
          let currentFilter = filters.find(f => f.parameterName === currentFiltersKey)
          for (let value of queryFilterValue) {
            if(!currentFilter.values.includes(value)) {
              queryFilterValue.splice(queryFilterValue.findIndex(queryValue => queryValue === value), 1)
            }
          }
        }
      currentFilters[currentFiltersKey] = queryFilterValue;
      }
      console.log(currentFilters)
      this.setCurrentFilters(currentFilters);
      this.$router.push("/");
      this.$router.push({name:this.products, query:this.currFilters});
      this.getProducts();
    }).catch(() => {})
  },
}
</script>

<style scoped>

</style>

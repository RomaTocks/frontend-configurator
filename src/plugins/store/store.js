import Vue from 'vue'
import Vuex from 'vuex'
import {filters} from "@/plugins/store/modules/filter";
import {configuration} from "@/plugins/store/modules/config";
import {Product} from "@/plugins/store/modules/product";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    controller : new AbortController(),
    productsLoading : true,
    path:""

  },
  mutations: {
    setController(state) {
      state.controller.abort();
      state.controller = new AbortController();
    },
    setProductsLoading(state, payload) {
      state.productsLoading = payload;
    },
    currentPath(state, path) {
      state.path = path;
    },

  },
  getters: {
    getController : state => {
      return state.controller;
    },
    getProductsLoading : state => {
      return state.productsLoading;
    },
    getPath : state => {
      return state.path;
    },
  },
  actions: {},
  modules: {
    configurator : configuration,
    filters : filters,
    cpu : new Product(),
    gpu : new Product(),
    chassis : new Product(),
    psu : new Product(),
    ram : new Product(),
    motherboard : new Product(),
    fan : new Product()
  },
})

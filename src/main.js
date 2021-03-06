import Vue from 'vue'
import App from './App.vue'
import vuetify from '@/plugins/vuetify'
import store from "@/plugins/store/store";
import router from "@/plugins/router";

Vue.config.productionTip = false
new Vue({ router, store, vuetify, render: h => h(App),}).$mount('#app')

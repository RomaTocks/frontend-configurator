<template>
  <div v-if="product !== null" style="max-width: 1385px" class="mb-3">
    <v-card max-width="1385px" class="d-flex pa-4 align-center">
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
  </div>
</template>

<script>
export default {
name: "ConfigurationCard",
  props: {
    product:Object,
    changePath:String
  },
  methods: {
    removeCurrent() {
      this.$store.commit(this.changePath + '/setCurrent', this.product.id)
      let storageStringConfiguration = localStorage.getItem('configuration');
      let storageConfiguration = JSON.parse(storageStringConfiguration);
      storageConfiguration[this.changePath] = null;
      localStorage.setItem('configuration', JSON.stringify(storageConfiguration));
    },
    changeProduct() {
      this.$store.commit('configurator/closeDialog');
      this.$router.push(this.changePath)
    },
  }
}
</script>

<style scoped>

</style>

<template>
  <ComponentsWrapper :header="true" :configuration="true" :footer="true">
    <ProductsPage :path="path"/>
  </ComponentsWrapper>
</template>

<script>
/* eslint-disable vue/no-deprecated-destroyed-lifecycle */
import ProductsPage from "@/components/products/ProductsContainer";
import ComponentsWrapper from "@/components/wrapper/ComponentsWrapper";

export default {
name: "FanPage",
  props: {
    path : String,
  },
  methods:{
    setController() {
      this.$store.commit('setController')
    }
  },
  beforeDestroy() {
    this.setController();
  },
  components: {ComponentsWrapper, ProductsPage}
}
</script>

<style scoped>

</style>

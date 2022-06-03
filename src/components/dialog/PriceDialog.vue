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
        Магазины
      </v-card-title>
      <v-container class="pa-4" style="max-width: 1000px">
        <div :key="position.id" v-for="position in positions">
          <PositionCard :change-path="path" :min-price="arrayMin === position" :max-price="arrayMax === position" :position="position"/>
        </div>
      </v-container>
      <v-divider></v-divider>
    </v-card>
  </v-dialog>
</template>

<script>
import PositionCard from "@/components/card/PositionCard";
export default {
name: "PriceDialog",
  components: {PositionCard},
  props: {
    positions:Array,
    path: String
  },
  methods: {
    dialogState() {
      this.$store.commit(this.path + '/setConfigFilter')
    },
  },
  computed: {
    filter() {
      return this.$store.getters[this.path + '/getConfigFilter']
    },
    arrayMin() {
      return this.positions.reduce(function (first, second) {
        return ( first.position_price.value < second.position_price.value ? first : second );
      });
    },
    arrayMax() {
      return this.positions.reduce(function (first, second) {
        return ( first.position_price.value > second.position_price.value ? first : second );
      });
    }
  },
}
</script>

<style scoped>

</style>

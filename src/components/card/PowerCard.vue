<template>
  <div style="max-width: 1385px" class="mb-3">
    <v-card max-width="1385px" class="d-flex pa-4 align-center">
      <v-container>
        <v-row class="mb-3" justify="start">
          <h3>Загруженность блока питания Pure Power 11 500W CM BN297</h3>
        </v-row>
        <v-row justify="center">
          <v-progress-linear color="red" style="border-radius: 30px" height="50" value="118">
            <strong>{{ Math.ceil(118) }}%</strong>
          </v-progress-linear>
        </v-row>
        <v-row >
          <v-expansion-panels class="mt-5">
            <v-expansion-panel>
              <v-expansion-panel-header>
                Подробная информация о загруженности
              </v-expansion-panel-header>
              <v-expansion-panel-content>
                <v-list-item-group
                  active-class="pink--text"
                  multiple
                >
                  <v-list-item >
                    <template>
                      <v-list-item-content>
                        <v-list-item-title v-text="'Процессор'"></v-list-item-title>

                        <v-list-item-subtitle
                          class="text--primary"
                          v-text="'Core i9-12900KF'"
                        ></v-list-item-subtitle>
                      </v-list-item-content>

                      <v-list-item-action>
                        <v-list-item-action-text v-text="'241W'"></v-list-item-action-text>
                      </v-list-item-action>
                    </template>
                  </v-list-item>
                    <v-list-item >
                      <template>
                        <v-list-item-content>
                          <v-list-item-title v-text="'Видеокарта'"></v-list-item-title>

                          <v-list-item-subtitle
                            class="text--primary"
                            v-text="'GeForce RTX 3090 Gaming X Trio 24GB GDDR6X'"
                          ></v-list-item-subtitle>
                        </v-list-item-content>

                        <v-list-item-action>
                          <v-list-item-action-text v-text="'350W'"></v-list-item-action-text>
                        </v-list-item-action>
                      </template>
                    </v-list-item>

                    <v-divider
                    ></v-divider>
                </v-list-item-group>
                <p class="pa-4"><strong>Итого: </strong> 591W из 500W</p>
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>
        </v-row>
      </v-container>
    </v-card>
  </div>
</template>

<script>
export default {
name: "PowerCard"
}
</script>

<style scoped>

</style>

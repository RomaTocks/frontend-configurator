<template>
  <v-container>
    <v-row>
      <v-col class="d-flex flex-row justify-start align-center">
        <v-row justify="start" align="center">
            <v-avatar class="mr-4" color="primary" size="50">
              <span class="black--text text-h1">RT</span>
            </v-avatar>
            <h3 class="text-center">Roman Tocks</h3>
        </v-row>
      </v-col>
      <v-col cols="1" class="d-flex justify-end align-center">
        <v-btn color="red" outlined>Выйти</v-btn>
      </v-col>
    </v-row>
    <v-row class="mt-8">
      <v-tabs v-model="tab"
      >
        <v-tab href="#information">
          Профиль
        </v-tab>
        <v-tab href="#configurations">
          Сборки компьютера
        </v-tab>
        <v-tab href="#favorite">
          Избранное
        </v-tab>
      </v-tabs>
    </v-row>
    <v-row>
      <v-tabs-items style="width: 100%" v-model="tab">
        <v-tab-item :value="'information'">
          <v-text-field
            label="Имя"
          ></v-text-field>
          <v-text-field
            label="Фамилия"
          ></v-text-field>
          <v-text-field
            label="E-mail"
          ></v-text-field>
        </v-tab-item>
        <v-tab-item :value="'configurations'">
          <v-container>
            <v-row justify="center" justify-sm="start">
              <v-card class="ma-4 pa-4">
                <v-container>
                  <v-row justify="center">
                    <img alt="pics" width="75px" src="@/assets/public/pc.png">
                    <img alt="pics" width="75px" src="@/assets/public/pc.png">
                    <img alt="pics" width="75px" src="@/assets/public/pc.png">
                  </v-row>
                  <v-row justify="center">
                    <img alt="pics" width="75px" src="@/assets/public/pc.png">
                    <img alt="pics" width="75px" src="@/assets/public/pc.png">
                    <img alt="pics" width="75px" src="@/assets/public/pc.png">
                  </v-row>
                  <v-row justify="center">
                    <img alt="pics" width="75px" src="@/assets/public/pc.png">
                    <img alt="pics" width="75px" src="@/assets/public/pc.png">
                    <img alt="pics" width="75px" src="@/assets/public/pc.png">
                  </v-row>
                  <v-row justify="center">
                    <h3 class="text-center">Сборка N1</h3>
                  </v-row>
                  <v-row justify="center">
                    <v-btn color="primary">Посмотреть</v-btn>
                  </v-row>
                </v-container>
              </v-card>
              <v-card class="ma-4 pa-4">
                <v-container>
                  <v-row justify="center">
                    <img alt="pics" width="75px" src="@/assets/public/pc.png">
                    <img alt="pics" width="75px" src="@/assets/public/pc.png">
                    <img alt="pics" width="75px" src="@/assets/public/pc.png">
                  </v-row>
                  <v-row justify="center">
                    <img alt="pics" width="75px" src="@/assets/public/pc.png">
                    <img alt="pics" width="75px" src="@/assets/public/pc.png">
                    <img alt="pics" width="75px" src="@/assets/public/pc.png">
                  </v-row>
                  <v-row justify="center">
                    <img alt="pics" width="75px" src="@/assets/public/pc.png">
                    <img alt="pics" width="75px" src="@/assets/public/pc.png">
                    <img alt="pics" width="75px" src="@/assets/public/pc.png">
                  </v-row>
                  <v-row justify="center">
                    <h3 class="text-center">Сборка N1</h3>
                  </v-row>
                  <v-row justify="center">
                    <v-btn color="primary">Посмотреть</v-btn>
                  </v-row>
                </v-container>
              </v-card>
              <v-card class="ma-4 pa-4">
                <v-container>
                  <v-row justify="center">
                    <img alt="pics" width="75px" src="@/assets/public/pc.png">
                    <img alt="pics" width="75px" src="@/assets/public/pc.png">
                    <img alt="pics" width="75px" src="@/assets/public/pc.png">
                  </v-row>
                  <v-row justify="center">
                    <img alt="pics" width="75px" src="@/assets/public/pc.png">
                    <img alt="pics" width="75px" src="@/assets/public/pc.png">
                    <img alt="pics" width="75px" src="@/assets/public/pc.png">
                  </v-row>
                  <v-row justify="center">
                    <img alt="pics" width="75px" src="@/assets/public/pc.png">
                    <img alt="pics" width="75px" src="@/assets/public/pc.png">
                    <img alt="pics" width="75px" src="@/assets/public/pc.png">
                  </v-row>
                  <v-row justify="center">
                    <h3 class="text-center">Сборка N1</h3>
                  </v-row>
                  <v-row justify="center">
                    <v-btn color="primary">Посмотреть</v-btn>
                  </v-row>
                </v-container>
              </v-card>
              <v-card class="ma-4 pa-4">
                <v-container>
                  <v-row justify="center">
                    <img alt="pics" width="75px" src="@/assets/public/pc.png">
                    <img alt="pics" width="75px" src="@/assets/public/pc.png">
                    <img alt="pics" width="75px" src="@/assets/public/pc.png">
                  </v-row>
                  <v-row justify="center">
                    <img alt="pics" width="75px" src="@/assets/public/pc.png">
                    <img alt="pics" width="75px" src="@/assets/public/pc.png">
                    <img alt="pics" width="75px" src="@/assets/public/pc.png">
                  </v-row>
                  <v-row justify="center">
                    <img alt="pics" width="75px" src="@/assets/public/pc.png">
                    <img alt="pics" width="75px" src="@/assets/public/pc.png">
                    <img alt="pics" width="75px" src="@/assets/public/pc.png">
                  </v-row>
                  <v-row justify="center">
                    <h3 class="text-center">Сборка N1</h3>
                  </v-row>
                  <v-row justify="center">
                    <v-btn color="primary">Посмотреть</v-btn>
                  </v-row>
                </v-container>
              </v-card>
              <v-card class="ma-4 pa-4">
                <v-container>
                  <v-row justify="center">
                    <img alt="pics" width="75px" src="@/assets/public/pc.png">
                    <img alt="pics" width="75px" src="@/assets/public/pc.png">
                    <img alt="pics" width="75px" src="@/assets/public/pc.png">
                  </v-row>
                  <v-row justify="center">
                    <img alt="pics" width="75px" src="@/assets/public/pc.png">
                    <img alt="pics" width="75px" src="@/assets/public/pc.png">
                    <img alt="pics" width="75px" src="@/assets/public/pc.png">
                  </v-row>
                  <v-row justify="center">
                    <img alt="pics" width="75px" src="@/assets/public/pc.png">
                    <img alt="pics" width="75px" src="@/assets/public/pc.png">
                    <img alt="pics" width="75px" src="@/assets/public/pc.png">
                  </v-row>
                  <v-row justify="center">
                    <h3 class="text-center">Сборка N1</h3>
                  </v-row>
                  <v-row justify="center">
                    <v-btn color="primary">Посмотреть</v-btn>
                  </v-row>
                </v-container>
              </v-card>
              <v-card class="ma-4 pa-4">
                <v-container>
                  <v-row justify="center">
                    <img alt="pics" width="75px" src="@/assets/public/pc.png">
                    <img alt="pics" width="75px" src="@/assets/public/pc.png">
                    <img alt="pics" width="75px" src="@/assets/public/pc.png">
                  </v-row>
                  <v-row justify="center">
                    <img alt="pics" width="75px" src="@/assets/public/pc.png">
                    <img alt="pics" width="75px" src="@/assets/public/pc.png">
                    <img alt="pics" width="75px" src="@/assets/public/pc.png">
                  </v-row>
                  <v-row justify="center">
                    <img alt="pics" width="75px" src="@/assets/public/pc.png">
                    <img alt="pics" width="75px" src="@/assets/public/pc.png">
                    <img alt="pics" width="75px" src="@/assets/public/pc.png">
                  </v-row>
                  <v-row justify="center">
                    <h3 class="text-center">Сборка N1</h3>
                  </v-row>
                  <v-row justify="center">
                    <v-btn color="primary">Посмотреть</v-btn>
                  </v-row>
                </v-container>
              </v-card>
            </v-row>
          </v-container>
        </v-tab-item>
        <v-tab-item style="width: 100%" :value="'favorite'">
          <v-container>
            <v-card>
              <v-row class="pa-4 ma-2" align="center">
                <v-col class="d-flex flex-row align-center justify-start">
                  <img alt="pics" width="100px" src="@/assets/public/pc.png">
                  <h3 class="ml-4">Ryzen 5 3600</h3>
                </v-col>
                <v-col class="d-flex flex-row justify-end align-center">
                  <v-btn class="mr-2" outlined>Onliner</v-btn>
                  <v-btn class="mr-2">Открыть</v-btn>
                  <v-btn icon><v-icon>mdi-close</v-icon></v-btn>
                </v-col>
              </v-row>
            </v-card>
          </v-container>

        </v-tab-item>
      </v-tabs-items>
    </v-row>
  </v-container>
</template>

<script>
export default {
name: "ProfileContainer",
  data: () => ({
    tab:'personal',
  }),
}
</script>

<style scoped>

</style>

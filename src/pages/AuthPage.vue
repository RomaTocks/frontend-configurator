<template>
  <ComponentsWrapper :header="false" :footer="false" :configuration="false">
    <v-container class="mt-16">
      <v-row justify="center" align="center" class="mb-4">
        <img alt="logo" width="40px" height="40px" src="@/assets/logo.png" class="mr-2">
        <router-link class="text-decoration-none" to="/">
          <h2>Онлайн-конфигуратор</h2>
        </router-link>
      </v-row>
      <v-row justify="center">
        <v-card style="width: 400px" class="pa-4">
          <v-tabs v-model="tab" style="width: 100%" fixed-tabs>
            <v-tab href="#register">Регистрация</v-tab>
            <v-tab href="#auth">Авторизация</v-tab>
          </v-tabs>
          <v-tabs-items v-model="tab">
            <v-tab-item :value="'register'">
              <RegisterForm/>
            </v-tab-item>
            <v-tab-item :value="'auth'">
              <AuthForm/>
            </v-tab-item>
          </v-tabs-items>
        </v-card>
      </v-row>
    </v-container>
  </ComponentsWrapper>
</template>

<script>
import RegisterForm from "@/components/authentication/registration/RegisterForm";
import AuthForm from "@/components/authentication/authorization/AuthForm";
import ComponentsWrapper from "@/components/wrapper/ComponentsWrapper";
export default {
name: "AuthPage",
  components: {ComponentsWrapper, AuthForm, RegisterForm},
  data: () => ({
    tab:'auth',
  }),
}
</script>

<style scoped>

</style>

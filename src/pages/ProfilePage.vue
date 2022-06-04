<template>
  <ComponentsWrapper :header="true" :footer="true" :configuration="false">
    <v-container style="height: 100%" fluid>
      <ProfileContainer/>
    </v-container>
  </ComponentsWrapper>
</template>

<script>
import ProfileContainer from "@/components/profile/ProfileContainer";
import ComponentsWrapper from "@/components/wrapper/ComponentsWrapper";
export default {
name: "ProfilePage",
  components: {ComponentsWrapper, ProfileContainer}
}
</script>

<style scoped>

</style>

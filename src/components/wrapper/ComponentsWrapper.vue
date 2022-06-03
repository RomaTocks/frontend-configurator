<template>
  <div style="height: 100%">
    <AppHeader v-if="header"/>
    <slot></slot>
    <ConfiguratorButton v-if="configuration"/>
    <ConfiguratorDialog v-if="configuration"/>
    <AppFooter v-if="footer"/>
  </div>
</template>

<script>
import AppHeader from "@/components/app/AppHeader";
import AppFooter from "@/components/app/AppFooter";
import ConfiguratorButton from "@/components/button/ConfiguratorButton";
import ConfiguratorDialog from "@/components/dialog/ConfiguratorDialog";
export default {
name: "ComponentsWrapper",
  components: {ConfiguratorDialog, ConfiguratorButton, AppFooter, AppHeader},
  props: {
    header: Boolean,
    footer: Boolean,
    configuration: Boolean
  }
}
</script>

<style scoped>

</style>

<template>
  <v-app>
    <Toolbar app />

    <v-content>
      <v-container fluid fill-height>
        <router-view />
      </v-container>
    </v-content>

    <Footer app />
  </v-app>
</template>

<script>
import Toolbar from "./components/App/Toolbar.vue";
import Footer from "./components/App/Footer.vue";

export default {
  name: "App",
  components: { Toolbar, Footer }
};
</script>

<style scoped>
.container {
  background: darkgray;
}
</style>

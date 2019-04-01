<template>
  <v-app>
    <Toolbar app />

    <v-content>
      <router-view />
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

<style>
.container {
  background-image: url("https://www.bulkogikrnbbq.com/wp-content/uploads/2017/02/background_truck-1.jpg");
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
}
</style>

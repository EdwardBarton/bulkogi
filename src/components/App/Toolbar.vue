<template>
  <v-toolbar dark>
    <v-toolbar-side-icon class="hidden-md-and-up"></v-toolbar-side-icon>
    <v-toolbar-items>
      <v-btn active-class="not-active" flat to="/">
        <v-img :src="require('../../assets/bulkogi.png')" />
      </v-btn>
    </v-toolbar-items>
    <v-spacer></v-spacer>
    <v-toolbar-items class="hidden-sm-and-down">
      <v-btn active-class="not-active" flat to="/menu">Menu</v-btn>
      <v-btn active-class="not-active" flat to="/catering">Catering</v-btn>

      <v-menu>
        <template v-slot:activator="{ on }">
          <v-btn flat v-on="on">
            About
            <v-icon>arrow_drop_down</v-icon>
          </v-btn>
        </template>

        <v-list dark>
          <v-list-tile to="/company">
            <v-list-tile-title>Company</v-list-tile-title>
          </v-list-tile>
          <v-list-tile to="/contact">
            <v-list-tile-title>Contact</v-list-tile-title>
          </v-list-tile>
          <v-list-tile to="/press">
            <v-list-tile-title>Press</v-list-tile-title>
          </v-list-tile>
        </v-list>
      </v-menu>
    </v-toolbar-items>
    <v-btn
      class="hidden-sm-and-down"
      active-class="not-active"
      to="/where"
      color="primary"
      round
      >Where?</v-btn
    >
  </v-toolbar>
</template>

<script>
export default {};
</script>

<style scoped></style>

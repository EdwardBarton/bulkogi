<template>
  <v-container fluid grid-list-xs fill-height>
    <v-layout row>
      <v-flex xs12>
        <v-layout align-center justify-center row>
          <v-img :src="require('../assets/bulkogi.png')" contain height="200" />
        </v-layout>
        <v-layout align-center justify-center row mb-5>
          <h4 class="display-1 text-xs-center">Authentic Korean BBQ</h4>
        </v-layout>
        <v-layout align-center justify-center column>
          <v-btn to="/where" color="error" round large>Where Is Bulkogi?</v-btn>
          <v-btn to="/menu" color="primary" round large>View Our Menu</v-btn>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {};
</script>

<style scoped></style>

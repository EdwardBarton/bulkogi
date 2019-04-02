<template>
  <v-container fluid fill-height grid-list-md text-xs-center>
    <v-layout row wrap justify-space-around>
      <!-- SEND MESSAGE -->
      <v-flex xs12 md6>
        <Message />
      </v-flex>
      <!-- BOOK US -->
      <v-flex xs12 md6>
        <Book />
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import Message from "../components/Contact/Message.vue";
import Book from "../components/Contact/Book.vue";

export default {
  components: { Message, Book }
};
</script>

<style scoped></style>

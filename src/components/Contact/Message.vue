<template>
  <v-layout column pa-4 ma-1 class="message-us">
    <v-flex xs8>
      <h4 class="display-1 red--text mb-5 text-uppercase">
        Send a Message
      </h4>
      <v-text-field
        prepend-inner-icon="account_circle"
        v-model="name"
        label="Name*"
        outline
        clearable
      ></v-text-field>
      <v-text-field
        prepend-inner-icon="email"
        v-model="email"
        label="Email*"
        outline
        clearable
      ></v-text-field>
      <v-textarea
        prepend-inner-icon="help"
        v-model="message"
        label="Message..."
        counter
        clearable
        maxlength="200"
        outline
      ></v-textarea>
      <v-btn color="primary" large>Submit</v-btn>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  data() {
    return {
      name: null,
      email: null,
      message: null
    };
  }
};
</script>

<style scoped>
.message-us {
  background: rgba(255, 255, 255, 0.9);
  border-radius: 10px;
}
</style>

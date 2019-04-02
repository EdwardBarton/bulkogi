<template>
  <v-layout column pa-4 ma-1 class="book-us">
    <v-flex xs8>
      <h4 class="display-1 red--text mb-5 text-uppercase">
        Book an Event
      </h4>
      <v-text-field
        v-model="name"
        prepend-inner-icon="account_circle"
        label="Name*"
        outline
        clearable
      ></v-text-field>
      <v-text-field
        v-model="email"
        prepend-inner-icon="email"
        label="Email*"
        outline
        clearable
      ></v-text-field>
      <v-text-field
        v-model="eventName"
        prepend-inner-icon="help"
        label="Event Name*"
        outline
        clearable
      ></v-text-field>
      <v-text-field
        v-model="location"
        label="Event Location*"
        prepend-inner-icon="place"
        outline
        clearable
      ></v-text-field>

      <v-menu
        v-model="menu"
        :close-on-content-click="false"
        :nudge-right="40"
        lazy
        transition="scale-transition"
        offset-y
        full-width
        min-width="290px"
      >
        <template v-slot:activator="{ on }">
          <v-text-field
            v-model="date"
            label="Event Date*"
            prepend-inner-icon="event"
            readonly
            outline
            v-on="on"
          ></v-text-field>
        </template>
        <v-date-picker v-model="date" @input="menu = false"></v-date-picker>
      </v-menu>

      <v-text-field
        v-model="providers"
        prepend-inner-icon="airport_shuttle"
        min="0"
        label="Number of food providers"
        outline
        type="number"
      ></v-text-field>
      <v-radio-group v-model="truck" label="Do you want our truck present?">
        <v-radio label="Yes" value="yes"></v-radio>
        <v-radio label="No" value="no"></v-radio>
      </v-radio-group>
      <v-radio-group
        v-model="flatSpace"
        label="Is there a flat space for the truck?"
      >
        <v-radio label="Yes" value="yes"></v-radio>
        <v-radio label="No" value="no"></v-radio>
      </v-radio-group>
      <v-radio-group
        v-model="power"
        label="Will power for the truck be provided?"
      >
        <v-radio label="Yes" value="yes"></v-radio>
        <v-radio label="No" value="no"></v-radio>
      </v-radio-group>
      <v-btn color="primary" large>Request Event</v-btn>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  data() {
    return {
      name: null,
      email: null,
      eventName: null,
      location: null,
      menu: false,
      date: null,
      truck: null,
      flatSpace: null,
      power: null,
      providers: null
    };
  }
};
</script>

<style scoped>
.book-us {
  background: rgba(255, 255, 255, 0.9);
  border-radius: 10px;
}
</style>

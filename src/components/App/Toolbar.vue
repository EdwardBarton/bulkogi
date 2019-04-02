<template>
  <nav>
    <v-navigation-drawer
      app
      :clipped="false"
      v-model="drawer"
      dark
      disable-resize-watcher
    >
      <v-list>
        <v-list-tile
          v-for="(link, index) in links"
          :key="index"
          :to="link.path"
        >
          <v-list-tile-action>
            <v-icon>{{ link.icon }}</v-icon>
          </v-list-tile-action>

          <v-list-tile-content>
            <v-list-tile-title>{{ link.title }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>

    <v-toolbar app dark :clipped-left="false">
      <v-toolbar-side-icon
        class="hidden-md-and-up"
        @click.stop="drawer = !drawer"
      ></v-toolbar-side-icon>
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
            <v-list-tile to="/contact">
              <v-list-tile-title>Contact</v-list-tile-title>
            </v-list-tile>
            <v-list-tile to="/company">
              <v-list-tile-title>Company</v-list-tile-title>
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
        color="error"
        round
        small
        >Where</v-btn
      >
    </v-toolbar>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
      links: [
        {
          title: "Where",
          path: "/where"
        },
        {
          title: "Menu",
          path: "/menu"
        },
        {
          title: "Catering",
          path: "/catering"
        },
        {
          title: "Contact",
          path: "/contact"
        },
        {
          title: "Company",
          path: "/company"
        },
        {
          title: "Press",
          path: "/press"
        }
      ]
    };
  }
};
</script>

<style scoped></style>

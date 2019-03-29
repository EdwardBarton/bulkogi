import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Menu from "./views/Menu.vue";
import Catering from "./views/Catering.vue";
import Company from "./views/Company.vue";
import Contact from "./views/Contact.vue";
import Press from "./views/Press.vue";
import Where from "./views/Where.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/menu",
      name: "menu",
      component: Menu
    },
    {
      path: "/catering",
      name: "catering",
      component: Catering
    },
    {
      path: "/company",
      name: "company",
      component: Company
    },
    {
      path: "/contact",
      name: "contact",
      component: Contact
    },
    {
      path: "/press",
      name: "press",
      component: Press
    },
    {
      path: "/where",
      name: "where",
      component: Where
    }
  ]
});

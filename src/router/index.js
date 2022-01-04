import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import ScrewDriver from "../views/ScrewDriver.vue";
import AddScrewDriver from "../views/AddScrewDriver.vue";
import EditScrewDriver from "../views/ScrewDriver.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/screwDrivers",
    name: "ScrewDrivers",
    component: ScrewDriver
  },
  {
    path: "/addScrewDriver",
    name: "AddScrewDriver",
    component: AddScrewDriver
  },
  {
    path: "/editScrewDriver/:id",
    name: "EditScrewDriver",
    component: EditScrewDriver
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;

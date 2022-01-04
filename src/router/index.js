import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import CarBrand from "../views/CarBrand.vue";
import AddCarBrand from "../views/AddCarBrand.vue"
import EditBrand from "../views/EditBrand.vue"

import EditELiquid from "../views/EditELiquid.vue"
import AddEliquid from "../views/AddELiquid.vue"
import ELiquid from "../views/ELiquid.vue"



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
    path: "/carBrands",
    name: "CarBrands",
    component: CarBrand
  },
  {
    path: "/addCarBrand",
    name: "AddCarBrand",
    component: AddCarBrand
  },
  {
    path: "/editBrand/:id",
    name: "EditBrand",
    component: EditBrand
  },
  {
    path: "/EditELiquid/:id",
    name: "EditELiquid",
    component: EditELiquid
  },
  {
    path: "/AddEliquid",
    name: "AddEliquid",
    component: AddEliquid
  },
  {
    path: "/ELiquid",
    name: "ELiquid",
    component: ELiquid
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;

import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import CarBrand from "../views/CarBrand.vue";
import AddCarBrand from "../views/AddCarBrand.vue";
import EditBrand from "../views/EditBrand.vue";
import Hammer from "../views/Hammer/Hammer.vue";
import AddHammer from "../views/Hammer/AddHammer.vue";
import EditHammer from "../views/Hammer/EditHammer.vue";

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
    path: "/hammers",
    name: "Hammers",
    component: Hammer
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
    path: "/editHammer/:id",
    name: "EditHammer",
    component: EditHammer
  },
  {
    path: "/addHammer",
    name: "AddHammer",
    component: AddHammer
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;

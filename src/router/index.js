import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import CarBrand from "../views/CarBrand.vue";
import AddCarBrand from "../views/AddCarBrand.vue";
import EditBrand from "../views/EditBrand.vue";
import AddRandom from "../views/Random/AddRandom";
import EditRandom from "../views/Random/EditRandom";
import Random from "../views/Random/Random";

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
    component: CarBrand,
  },
  {
    path: "/addCarBrand",
    name: "AddCarBrand",
    component: AddCarBrand,
  },
  {
    path: "/editBrand/:id",
    name: "EditBrand",
    component: EditBrand,
  },
  {
    path: "/randoms",
    name: "Randoms",
    component: Random,
  },
  {
    path: "/editRandom/:id",
    name: "EditRandom",
    component: EditRandom,
  },
  {
    path: "/addRandom",
    name: "AddRandom",
    component: AddRandom,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;

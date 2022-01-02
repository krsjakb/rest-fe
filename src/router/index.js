import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import CarBrand from "../views/CarBrand.vue";
import AddCarBrand from "../views/AddCarBrand.vue"
import EditBrand from "../views/EditBrand.vue"
import Weapons from "../views/Weapons.vue";
import AddWeapons from "../views/AddWeapons.vue";
import EditWeapons from "../views/EditWeapons.vue";

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
    path: "/Weapons",
    name: "Weapons",
    component: Weapons
  },
  {
    path: "/addWeapons",
    name: "AddWeapons",
    component: AddWeapons
  },
  {
    path: "/editWeapons/:id",
    name: "EditWeapon",
    component: EditWeapons
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;

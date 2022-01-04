import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import CarBrand from "../views/CarBrand.vue";
import AddCarBrand from "../views/AddCarBrand.vue"
import KontrollerBrand from "../views/KontrollerBrand.vue";
import AddKontrollerBrand from "../views/AddKontrollerBrand.vue"
import EditBrand from "../views/EditBrand.vue"
import EditKontrollerBrand from "../views/EditKontrollerBrand.vue"


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
    path: "/kontrollerBrands",
    name: "KontrollerBrands",
    component: KontrollerBrand
  },
  {
    path: "/addKontrollerBrand",
    name: "AddKontrollerBrand",
    component: AddKontrollerBrand
  },
  {
    path: "/editkontrollerBrand/:id",
    name: "EditKontrollerBrand",
    component: EditKontrollerBrand
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;

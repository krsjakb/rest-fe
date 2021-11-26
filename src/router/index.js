import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import CarBrand from "../views/CarBrand.vue";
import AddCarBrand from "../views/AddCarBrand.vue"
import EditBrand from "../views/EditBrand.vue"
import Bed from '../views/Bed.vue'
import AddBed from '../views/AddBed.vue'
import EditBed from '../views/EditBed.vue'

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
    path: '/beds',
    name: 'Beds',
    component: Bed
  },
  {
    path: '/addBed',
    name: 'AddBed',
    component: AddBed
  },
  {
    path: '/editBed/:id',
    name: 'EditBed',
    component: EditBed
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;

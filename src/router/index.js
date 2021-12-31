import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import CarBrand from "../views/CarBrand.vue";
import AddCarBrand from "../views/AddCarBrand.vue"
import EditBrand from "../views/EditBrand.vue"
import WhiskeyBrand from "../views/WhiskeyBrand"
import EditWhiskeyBrand from "../views/EditWhiskeyBrand"
import AddWhiskeyBrand from "../views/AddWhiskeyBrand"

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
    path: "/whiskeyBrands",
    name: "WhiskeyBrands",
    component: WhiskeyBrand
  },
  {
    path: "/addWhiskeyBrand",
    name: "AddWhiskeyBrand",
    component: AddWhiskeyBrand
  },
  {
    path: "/editWhiskeyBrand/:id",
    name: "EditWhiskeyBrand",
    component: EditWhiskeyBrand
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;

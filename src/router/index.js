import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import CarBrand from "../views/CarBrand.vue";
import AddCarBrand from "../views/AddCarBrand.vue"
import EditBrand from "../views/EditBrand.vue"
import JobAdvertisement from "../views/JobAdvertisement.vue"
import AddJobAdvertisement from "../views/AddJobAdvertisement.vue"
import EditJobAdvertisement from "../views/EditJobAdvertisement.vue"

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
    path: "/jobAdvertisements",
    name: "JobAdvertisements",
    component: JobAdvertisement
  },
  {
    path: "/addJobAdvertisement",
    name: "AddJobAdvertisement",
    component: AddJobAdvertisement
  },
  {
    path: "/editJobAdvertisement/:id",
    name: "EditJobAdvertisement",
    component: EditJobAdvertisement
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;

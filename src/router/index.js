import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import CarBrand from "../views/CarBrand.vue";
import AddCarBrand from "../views/AddCarBrand.vue";
import EditBrand from "../views/EditBrand.vue";
import Job from "../views/Job.vue";
import EditJob from "../views/EditJob.vue";
import AddJob from "../views/AddJob.vue";

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
    path: "/jobs",
    name: "Jobs",
    component: Job
  },
  {
    path: "/addJob",
    name: "AddJob",
    component: AddJob
  },
  {
    path: "/editJob/:id",
    name: "EditJob",
    component: EditJob
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;

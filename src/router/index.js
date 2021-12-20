import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import CarBrand from "../views/CarBrand.vue";
import AddCarBrand from "../views/AddCarBrand.vue"
import EditBrand from "../views/EditBrand.vue"

import MonitorBrand from "../views/MonitorBrand.vue"
import AddMonitorBrand from "../views/AddMonitorBrand.vue"
import EditMonitorBrand from "../views/EditMonitorBrand.vue"
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
    path: "/monitorBrand",
    name: "MonitorBrand",
    component: MonitorBrand
  },
  {
    path: "/addMonitorBrand",
    name: "AddMonitorBrand",
    component: AddMonitorBrand
  },
  {
    path: "/editMonitorBrand/:id",
    name: "EditMonitorBrand",
    component: EditMonitorBrand
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;

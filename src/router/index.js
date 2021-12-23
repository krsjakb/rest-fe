import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import CarBrand from "../views/CarBrand.vue";
import AddCarBrand from "../views/AddCarBrand.vue";
import EditBrand from "../views/EditBrand.vue";
import Mouse from "../views/Mouse/Mouse.vue";
import AddMouse from "../views/Mouse/AddMouse.vue";
import EditMouse from "../views/Mouse/EditMouse.vue";

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
    path: "/mouses",
    name: "Mouses",
    component: Mouse
  },
  {
    path: "/editMouse/:id",
    name: "EditMouse",
    component: EditMouse
   },
  {
    path: "/addMouse",
    name: "AddMouse",
    component: AddMouse
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;

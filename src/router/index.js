import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import CarBrand from "../views/CarBrand.vue";
import AddCarBrand from "../views/AddCarBrand.vue"
import EditBrand from "../views/EditBrand.vue"
import CelloBrand from "../views/CelloBrand.vue";
import AddCelloBrand from "../views/AddCelloBrand.vue"
import EditCelloBrand from "../views/EditCelloBrand.vue"


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
    path: "/celloBrands",
    name: "CelloBrands",
    component: CelloBrand
  },
  {
    path: "/addCelloBrand",
    name: "AddCelloBrand",
    component: AddCelloBrand
  },
  {
    path: "/editCelloBrand/:id",
    name: "EditCelloBrand",
    component: EditCelloBrand
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;

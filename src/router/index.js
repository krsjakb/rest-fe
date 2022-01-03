import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import CarBrand from "../views/CarBrand.vue";
import AddCarBrand from "../views/AddCarBrand.vue";
import EditBrand from "../views/EditBrand.vue";
import HairDryer from "../views/HairDryer.vue";
import AddHairDryer from "../views/AddHairDryer.vue";
import EditHairDryer from "../views/EditHairDryer.vue";

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
    path: "/HairDryer",
    name: "HairDryer",
    component: HairDryer
  },
  {
    path: "/AddHairDryer",
    name: "AddHairDryer",
    component: AddHairDryer
  },
  {
    path: "/EditHairDryer",
    name: "EditHairDryer",
    component: EditHairDryer
  }


];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;

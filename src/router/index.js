import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import CarBrand from "../views/CarBrand.vue";
import AddCarBrand from "../views/AddCarBrand.vue";
import EditBrand from "../views/EditBrand.vue";
import NBAPlayers from "../views/NBAPlayers.vue";
import AddPlayer from "../views/AddPlayer.vue";
import EditPlayer from "../views/EditPlayer.vue";

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
    path: "/nbaPlayer",
    name: "nbaPlayer",
    component: NBAPlayers
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
    path: "/addNBAPlayer",
    name: "AddPlayer",
    component: AddPlayer
  },
  {
    path: "/editPlayer/:id",
    name: "EditPlayer",
    component: EditPlayer
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;

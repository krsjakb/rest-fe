import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import CarBrand from "../views/CarBrand.vue";
import AddCarBrand from "../views/AddCarBrand.vue"
import EditBrand from "../views/EditBrand.vue"
import Chair from "../views/Chair.vue"
import AddChair from "../views/AddChair.vue"
import EditChair from "../views/EditChair.vue"

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
    path: '/chairs',
    name: 'Chairs',
    component: Chair
  },
  {
    path: '/addChair',
    name: 'AddChair',
    component: AddChair
  },
  {
    path: '/editChair/:id',
    name: 'EditChair',
    component: EditChair
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;

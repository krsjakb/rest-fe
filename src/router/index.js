import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import CarBrand from "../views/CarBrand.vue";
import AddCarBrand from "../views/AddCarBrand.vue"
import EditBrand from "../views/EditBrand.vue"
import BooksModels from "../views/BooksModels.vue"
import AddBooksModels from "../views/AddBooksModels.vue"
import EditBooksModels from "../views/EditBooksModels.vue"

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
    path: "/BooksModels",
    name: "BooksModels",
    component: BooksModels
  },
  {
    path: "/AddBooksModels",
    name: "AddBooksModels",
    component: AddBooksModels
  },
  {
    path: "/EditBooksModels/:id",
    name: "EditBooksModels",
    component: EditBooksModels
  }

];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;

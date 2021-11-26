import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import CarBrand from "../views/CarBrand.vue";
import AddCarBrand from "../views/AddCarBrand.vue"
import EditBrand from "../views/EditBrand.vue"
import Speaker from "../views/Speaker/Speaker.vue"
import AddSpeaker from "../views/Speaker/AddSpeaker.vue"
import EditSpeaker from "../views/Speaker/EditSpeaker.vue"

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
    path: "/EditSpeaker/:id",
    name: "EditSpeaker",
    component: EditSpeaker
  },
  {
    path: "/AddSpeaker",
    name: "AddSpeaker",
    component: AddSpeaker
  },
  {
    path: "/Speaker",
    name: "Speaker",
    component: Speaker
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;

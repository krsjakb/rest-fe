import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import CarBrand from "../views/CarBrand.vue";
<<<<<<< Updated upstream
import AddCarBrand from "../views/AddCarBrand.vue"
import EditBrand from "../views/EditBrand.vue"
=======
import AddCarBrand from "../views/AddCarBrand.vue";
import EditBrand from "../views/EditBrand.vue";
import GiftCard from "../views/GiftCard.vue"
import AddGiftCard from "../views/AddGiftCard.vue"
import EditGiftCard from "../views/EditGiftCard.vue"
>>>>>>> Stashed changes

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
<<<<<<< Updated upstream
=======
  },
  {
    path: "/giftcards",
    name: "GiftCard",
    component: GiftCard
  },
  {
    path: "/addGiftCard",
    name: "AddGiftCard",
    component: AddGiftCard
  },
  {
    path: "/editGiftCard/:id",
    name: "EditGiftCard",
    component: EditGiftCard
>>>>>>> Stashed changes
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;

import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import CarBrand from "../views/CarBrand.vue";
import AddCarBrand from "../views/AddCarBrand.vue";
import EditBrand from "../views/EditBrand.vue";
import Screw from "../views/Screw.vue";
import AddScrew from "../views/AddScrew.vue";
import EditScrew from "../views/EditScrew.vue";

Vue.use(VueRouter);

const routes = [{
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
        path: "/screws",
        name: "Screws",
        component: Screw
    },
    {
        path: "/addScrew",
        name: "AddScrew",
        component: AddScrew
    },
    {
        path: "/editScrew/:id",
        name: "EditScrew",
        component: EditScrew
    },
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes,
});

export default router;
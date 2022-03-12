import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import CarBrand from "../views/CarBrand.vue";
import AddCarBrand from "../views/AddCarBrand.vue";
import EditBrand from "../views/EditBrand.vue";
import EditPhone from "../views/EditPhone.vue";
import AddPhone from "../views/AddPhone.vue";
import Phone from "../views/Phone.vue";
import USBConnector from "../views/USBConnector.vue";
import AddUSBConnector from "../views/AddUSBConnector.vue";
import EditUSBConnector from "../views/EditUSBConnector.vue";
import PlugType from "../views/PlugType.vue";
import AddPlugType from "../views/AddPlugType.vue";
import EditPlugType from "../views/EditPlugType.vue";
import PhoneUSBConnectors from "../views/PhoneUSBConnector.vue";
import AddPhoneUSBConnector from "../views/AddPhoneUSBConnector.vue";
import EditPhoneUSBConnector from "../views/EditPhoneUSBConnector.vue";

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
    path: "/editPhone/:id",
    name: "EditPhone",
    component: EditPhone
  },
  {
    path: "/addPhone",
    name: "AddBrand",
    component: AddPhone
  },
  {
    path: "/phones",
    name: "Phones",
    component: Phone
  },
  {
    path: "/usbconnectors",
    name: "USBConnector",
    component: USBConnector
  },
  {
    path: "/addusbconnector",
    name: "AddUSBConnector",
    component: AddUSBConnector
  },
  {
    path: "/editusbconnector/:id",
    name: "EditUSBConnector",
    component: EditUSBConnector
  },
  {
    path: "/PlugTypes",
    name: "PlugTypes",
    component: PlugType
  },
  {
    path: "/addPlugType",
    name: "AddPlugType",
    component: AddPlugType
  },
  {
    path: "/editPlugType/:id",
    name: "EditPlugType",
    component: EditPlugType
  },
  {
    path: "/PhoneUSBConnectors",
    name: "PhoneUSBConnectors",
    component: PhoneUSBConnectors
  },
  {
    path: "/addPhoneUSBConnector",
    name: "AddPhoneUSBConnector",
    component: AddPhoneUSBConnector
  },
  {
    path: "/editPhoneUSBConnector/:id",
    name: "EditPhoneUSBConnector",
    component: EditPhoneUSBConnector
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;

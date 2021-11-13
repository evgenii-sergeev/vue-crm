import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const metaMain = {
  layout: "main",
};

const metaEmpty = {
  layout: "empty",
};

const routes = [
  {
    path: "/",
    name: "Home",
    meta: metaMain,
    component: () => import("../views/Home.vue"),
  },
  {
    path: "/login",
    name: "Login",
    meta: metaEmpty,
    component: () => import("../views/Login.vue"),
  },
  {
    path: "/register",
    name: "Register",
    meta: metaEmpty,
    component: () => import("../views/Register.vue"),
  },
  {
    path: "/categories",
    name: "Categories",
    meta: metaMain,
    component: () => import("../views/Categories.vue"),
  },
  {
    path: "/detail-record",
    name: "Detail Record",
    meta: metaMain,
    component: () => import("../views/DetailRecord.vue"),
  },
  {
    path: "/history",
    name: "History",
    meta: metaMain,
    component: () => import("../views/History.vue"),
  },
  {
    path: "/planning",
    name: "Planning",
    meta: metaMain,
    component: () => import("../views/Planning.vue"),
  },
  {
    path: "/profile",
    name: "Profile",
    meta: metaMain,
    component: () => import("../views/Profile.vue"),
  },
  {
    path: "/record",
    name: "Record",
    meta: metaMain,
    component: () => import("../views/Record.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;

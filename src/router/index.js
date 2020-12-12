import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/home",
    name: "Home",
    component: Home
  },
   /* Lazy loader */
   {
    path: "/",
    name: "login",
    component: () =>
      import("../views/Login.vue")
  },
  {
    path: "/about",
    name: "about",
    component: () =>
      import("../views/About.vue")
  }
];

const router = new VueRouter({
  routes
});

export default router;

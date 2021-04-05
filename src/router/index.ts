import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";

Vue.use(VueRouter);

const loadView = (view: string) => () =>
  import(/* webpackChunkName: "[request]" */ `@/views/${view}.vue`);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Keywords",
    component: loadView("Keywords")
  }
];

const router = new VueRouter({
  base: process.env.BASE_URL,
  routes
});

export default router;

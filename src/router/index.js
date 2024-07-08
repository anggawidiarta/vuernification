import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/trips",
      name: "trips",
      component: () => import("../views/TripsView.vue"),
    },
    {
      path: "/:pathMatch(.*)",
      name: "not-found",
      component: () => import("../views/NotFoundView.vue"),
    },
    {
      path: "/trips/:id",
      name: "trip",
      component: () => import("../views/TripView.vue"),
    },
    {
      path: "/trips/add",
      name: "add-trip",
      component: () => import("../views/AddTripView.vue"),
    },
    {
      path: "/trips/edit/:id",
      name: "edit-trip",
      component: () => import("../views/EditTripView.vue"),
    },
  ],
});

export default router;

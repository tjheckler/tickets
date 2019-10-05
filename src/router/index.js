import Vue from "vue";
import Router from "vue-router";
import HomePage from "../components/HomePage.vue";
import TicketPage from "../components/TicketPage.vue";
import UserPage from "../components/UserPage.vue";
import RolePage from "../components/RolePage.vue";
import CategoryPage from "../components/CategoryPage.vue";
import PriorityPage from "../components/PriorityPage.vue";
import LocationPage from "../components/LocationPage.vue";
import RegionPage from "../components/RegionPage.vue";

Vue.use(Router);

let router = new Router({
  routes: [
    {
      path: "/",
      name: "Home",
      component: HomePage
    },
    {
      path: "/ticket",
      name: "Ticket",
      component: TicketPage
    },
    {
      path: "/user",
      name: "User",
      component: UserPage
    },
    {
      path: "/role",
      name: "Role",
      component: RolePage
    },
    {
      path: "/category",
      name: "Category",
      component: CategoryPage
    },
    {
      path: "/priority",
      name: "Priority",
      component: PriorityPage
    },
    {
      path: "/location",
      name: "Location",
      component: LocationPage
    },
    {
      path: "/region",
      name: "Region",
      component: RegionPage
    }
  ]
});
export default router;

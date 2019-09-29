import Vue from "vue";
import Router from "vue-router";
import HomePage from "../components/HomePage.vue";
import TicketPage from "../components/TicketPage.vue";

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
    }
  ]
});
export default router;

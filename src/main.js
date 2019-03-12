// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Router from "vue-router";
import Vue from "vue";
import App from "./App";
import Home from "./components/Home.vue";
import About from "./components/About.vue";

Vue.config.productionTip = false;
Vue.config.ignoredElements = [/^ion-/];

Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home
    },
    {
      path: "/about",
      name: "About",
      component: About
    }
  ]
});
new Vue({
  router,
  render: h => h(App)
}).$mount("#app");

/* eslint-disable no-new */
/* new Vue({
  el: "#app",
  components: { App },
  template: "<App/>"
}); */

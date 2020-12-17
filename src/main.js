import Vue from "vue";
import axios from "axios";
import App from "./App.vue";
import router from "./router";

const base = axios.create({
  baseURL: "https://desolate-anchorage-18616.herokuapp.com/"
});


Vue.prototype.$http = base;
Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");

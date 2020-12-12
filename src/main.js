import Vue from "vue";
import axios from"axios";
import App from "./App.vue";
import router from "./router";

const base = axios.create({
  baseURL:"http://localhost:3000"
});

Vue.prototype.$http = base;
Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");

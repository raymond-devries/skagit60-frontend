import Vue from "vue";
import App from "@/App";
import router from "@/router";
import store from "@/store";

Vue.config.productionTip = false;

new Vue({
  store: store,
  router,
  render: (h) => h(App),
}).$mount("#app");

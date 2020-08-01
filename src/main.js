import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import Meta from "vue-meta";

Vue.config.productionTip = false;

Vue.use(Meta);

new Vue({
  store,
  render: (h) => h(App),
}).$mount("#app");

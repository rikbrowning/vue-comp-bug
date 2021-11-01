import Vue from "vue";
import CompositionApi from "@vue/composition-api";
Vue.use(CompositionApi);
import App from "./App.vue";

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");

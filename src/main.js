import Vue from 'vue'
import App from './App.vue'
import VueMaterial from "vue-material";
import 'vue-material/dist/vue-material.min.css';
import 'vue-material/dist/theme/default-dark.css';
// import 'bootstrap/dist/css/bootstrap.css'
// import 'bootstrap-vue/dist/bootstrap-vue.css'
// import { BootstrapVue, IconsPlugin } from "bootstrap-vue";

Vue.config.productionTip = false

// Vue.use(BootstrapVue);
// Vue.use(IconsPlugin);
Vue.use(VueMaterial);

const vue = new Vue({
  VueMaterial,
  render: h => h(App),
});

vue.$mount('#app')

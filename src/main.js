import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Routes from './routes'
import store from './store'
import "./axios";

Vue.use(VueRouter);
const router = new VueRouter({
  routes: Routes
})
Vue.config.productionTip = false
new Vue({
  render: h => h(App),
  router : router,
  store
}).$mount('#app')

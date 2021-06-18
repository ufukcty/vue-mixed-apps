import Vue from 'vue'
import Notifications from 'vue-notification';
import axios from 'axios';
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

Vue.prototype.$axios = axios;

Vue.use(Notifications);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

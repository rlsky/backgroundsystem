import Vue from 'vue'
import router from './router/index.js';
import { Button, Select } from 'element-ui';
import App from './App.vue'

Vue.use(Button);
Vue.use(Select);

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

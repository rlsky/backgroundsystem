import Vue from 'vue'
import { Button, Select } from 'element-ui';
import App from './App.vue'

Vue.use(Button);
Vue.use(Select);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

import Vue from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import VModal from 'vue-js-modal'

import BootstrapVue from 'bootstrap-vue'

Vue.use(BootstrapVue)


// Modal
Vue.use(VModal, {
  dynamic: true,
  injectModalsContainer: true,
})

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

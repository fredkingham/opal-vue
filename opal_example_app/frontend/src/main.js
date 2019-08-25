import Vue from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import VModal from 'vue-js-modal'
import VueRouter from 'vue-router'
import PatientDetail from '@/components/pages/PatientDetail.vue'


import BootstrapVue from 'bootstrap-vue'

Vue.use(BootstrapVue)


Vue.use(VueRouter)


// Font awesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { faPencilAlt, faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faPencilAlt)
library.add(faPlus)

Vue.component('font-awesome-icon', FontAwesomeIcon)


const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    { path: '/', component: PatientDetail },
  ]
})


// Modal
Vue.use(VModal, {
  dynamic: true,
  injectModalsContainer: true,
})

Vue.config.productionTip = false


new Vue({
  router,
  el: '#app',
  render: h => h(App),
})

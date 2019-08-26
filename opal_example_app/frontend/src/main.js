import Vue from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import VModal from 'vue-js-modal'
import VueRouter from 'vue-router'
import PatientDetail from '@/components/pages/PatientDetail.vue'
import PatientList from '@/components/pages/PatientList.vue'
import schema from '@/opal/schema.js'


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
  base: __dirname,
  routes: [
    { path: '/', component: PatientList, name: "PatientList" },
    { path: '/patient/:id', component: PatientDetail, name: "PatientDetail" },
  ]
})


// Modal
  Vue.use(VModal, {
    dynamic: true,
    injectModalsContainer: true,
  })

Vue.config.productionTip = false


schema.load().then(function(){
  new Vue({
    router,
    el: '#app',
    render: h => h(App),
  })
});

import VueRouter from 'vue-router'
import Vue from 'vue'
import CarListComponent from '../components/CarListComponent.vue'
import Form from '../components/CarForm.vue'

Vue.use(VueRouter)

export default new VueRouter({
  mode : 'history',
  routes: [
    {
      path: '/',
      name: 'list',
      component: CarListComponent
    },
    {
      path: '/create',
      name: 'create',
      component: Form
    }
  ]
})

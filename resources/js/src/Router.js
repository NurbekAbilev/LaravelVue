import VueRouter from 'vue-router'
import Vue from 'vue'
import CarListComponent from '../components/CarListComponent.vue'

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
      component: Vue.component('asdf', {
        props: ['todo'],
        template: '<li>This is component</li>'
      })
    }
  ]
})

require('./bootstrap');
import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuesax from 'vuesax'
import 'vuesax/dist/vuesax.css';

window.Vue = require('vue');
Vue.use(VueRouter)
Vue.use(Vuesax)

Vue.component('example-component', require('./components/ExampleComponent.vue').default);
Vue.component('navbar', require('./components/NavbarComponent.vue').default);

const Foo = { template: '<div>foo</div>' }
const Bar = { template: '<div>bar</div>' }

const routes = [
  { path: '/foo', component: Foo },
  { path: '/bar', component: Bar }
]

const router = new VueRouter({
   routes: routes,
   created : function(){
       alert("vue router is being created");
   }
  
})

const app = new Vue({
  router
}).$mount('#app')

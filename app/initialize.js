// Import.
import Vue from 'vue'
import VueRouter from 'vue-router'

// Components.
import Home from './components/pages/home.vue'

// Register.
Vue.use(VueRouter)


// Define routes.
const routes = [
  { 
    path: '/',
    component: Home 
  }
]

// Define router.
const router = new VueRouter({
  mode: 'history',
  routes
})

// Instantiate app.
const app = new Vue({
  router
}).$mount('#app')


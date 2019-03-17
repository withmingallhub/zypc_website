/**eslint-disabled */
import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/index.vue'
import HomeView from '../views/Home.vue'
import SSrc from '../views/Src.vue'

Vue.use(VueRouter)

export default new VueRouter({
  mode: 'hash',
  routes: [{
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/home',
      name: 'home',
      component: HomeView
    },
    {
      path: '/src',
      name: 'hahah',
      component: SSrc
    },
  ]
})
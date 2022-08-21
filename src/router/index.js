import Vue from 'vue'
import VueRouter from 'vue-router'
import vInstructions from '@/pages/instructions.vue'
import vCatalog from '@/pages/catalog.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Instructions',
    component: vInstructions
  },
  {
    path: '/busca',
    name: 'Catalog',
    component: vCatalog
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

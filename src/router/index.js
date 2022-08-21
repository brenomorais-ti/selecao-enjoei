import Vue from 'vue'
import VueRouter from 'vue-router'
import Instructions from '@/pages/Instructions.vue'
import Catalog from '@/pages/Catalog.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Instructions',
    component: Instructions
  },
  {
    path: '/catalogo',
    name: 'Catalog',
    component: Catalog
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

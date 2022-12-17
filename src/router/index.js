import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Ejemplo from "../views/Ejemplo.vue";
import actualizar from "../views/actualizar.vue";
import base from "../views/base.vue";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Ejemplo',
    component: Ejemplo
  },
  {
    path: 'actualizar',
    name: 'actualizar',
    component: actualizar
  },
  {
    path: 'base',
    name: 'base',
    component: base
  },

  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

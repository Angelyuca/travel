import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import CityGuide from '../views/CityGuide.vue'
import Favorite from '../views/Favorite.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    props: true,

    children: [
      {
        path: '',
        name: 'CityGuide',
        component: CityGuide,
        props: true,
      },
      {
        path: '/favorite',
        name: 'Favorite',
        component: Favorite,
        props: true,
      },
    ]
  },

]

const router = new VueRouter({
  routes
})

export default router

import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import AllNews from '../views/AllNews.vue'
import AllEvents from '../views/AllEvents.vue'


Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/simple',
    name: 'simple',
    children: [
      {
        path: 'allnews',
        component: AllNews
      },
      {
        path: 'allevents',
        component: AllEvents
      }
    ],
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/SimpleViewer.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router

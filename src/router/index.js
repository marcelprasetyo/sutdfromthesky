import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import AllNews from '../views/AllNews.vue'
import AllEvents from '../views/AllEvents.vue'
import AllAchievements from '../views/AllAchievements'
import AllListsOfPeople from '../views/AllListsOfPeople'
import Videos from'../views/Videos'
import AllPublications from '../views/AllPublications'
import SUTDJobsCareers from '../views/SUTDJobsCareers'
import WeAreSUTD from '../views/WeAreSUTD'

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
      },
      {
        path: 'allachievements',
        component: AllAchievements
      },
      {
        path: 'allpublications',
        component: AllPublications
      },
      {
        path: 'sutdjobscareers',
        component: SUTDJobsCareers
      },
      {
        path: 'alllistsofpeople',
        component: AllListsOfPeople
      },
      {
        path: 'videos',
        component: Videos
      },
      {
        path: 'wearesutd',
        component: WeAreSUTD
      },
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

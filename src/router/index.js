import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "Main page" */ '../views/Main.vue')
  },
    {
      path: '/news',
    name: 'News',
    component: () => import(/* webpackChunkName: "News page" */ '../views/News.vue')
  },
    {
    path: '/news/:id',
    props:true,
    name: 'News Item',
    component: () => import(/* webpackChunkName: "News Item" */ '../views/_id.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

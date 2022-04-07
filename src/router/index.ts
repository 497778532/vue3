import { createRouter, createWebHashHistory, RouteRecordRaw,createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import login from '../views/login.vue'
import major from '../views/layout.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: Home,
    redirect: '/major',
    children: [
      { path: '/major', component: major },
      { path: '/order/pendingw', component: () => import('@/page/index.vue') },
      { path: '/logistics/configlist', component: () => import('@/page/index1.vue') },

      { path: '/warehouse/selfEmployed/inventorylist', component: () => import('@/page/index2.vue') },

      { path: '/purchase/local', component: () => import('@/page/index3.vue') },
      { path: '/report/overview', component: () => import('@/page/index4.vue') },

      { path: '/service/ali/dispute', component: () => import('@/page/index5.vue') },
      { path: '/platform/alishop', component: () => import('@/page/index6.vue') },
      { path: '/product/acquisition/data', component: () => import('@/page/index7.vue') },
      { path: '/404', component: () => import('@/page/index8.vue') },
    ],
  },

  {
    path: '/login',
    name: 'login',
    component: login
  },
  { path: '/:pathMatch(.*)', redirect: '/404' },
]

const router = createRouter({
  // createWebHashHistory
  // createWebHistory
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    const e: any = document.querySelector('#main')
    e.scrollTo({
      top:0,
      behavior:'instant'
    })
    // e.scrollTop = 0

  }
})
// router.beforeEach((to, from) => {

// })
export default router

import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from "@/views/Home/Home";

Vue.use(VueRouter)

// const originalPush = VueRouter.prototype.push
// VueRouter.prototype.push = function push(location) {
//   return originalPush.call(this, location).catch(err => err)
// }

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/category',
    name: 'Category',
    component: () => import('@/views/Category/Category')
  },
  {
    path: '/cart',
    name: 'Cart',
    component: () => import('@/views/Cart/Cart')
  },
  {
    path: '/profile',
    name: 'Profile',
    component: () => import('@/views/Profile/Profile')
  },
  {
    path: '/detail/:iid',
    component: () => import('@/views/Detail/Detail')
  },
  {
    path: '/login',
    component: () => import('@/views/Login/Login')
  },
  {
    path: '/register',
    component: () => import('@/views/Register/Register')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if(to.path == '/login' || to.path == '/register') return next()
  if(sessionStorage.getItem('token')) return next()
  next('/login')
})

export default router

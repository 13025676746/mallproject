import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from "@/views/Home/Home";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/category',
    name: 'Category',
    component: ()=>import('@/views/Category/Category')
  },
  {
    path: '/cart',
    name: 'Cart',
    component: ()=>import('@/views/Cart/Cart')
  },
  {
    path: '/profile',
    name: 'Profile',
    component: ()=>import('@/views/Profile/Profile')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

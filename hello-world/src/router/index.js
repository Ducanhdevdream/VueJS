import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'
// import Profile from '../views/Profile.vue'
// import Post from '../views/Post.vue'
import Home from '../components/Bai Tap/EX5/Home'
import ProductPage from '../components/Bai Tap/EX5/ProductPage.vue'
import InvoicePage from '../components/Bai Tap/EX5/InvoicePage.vue'
import StatisticPage from '../components/Bai Tap/EX5/StatisticPage.vue'
import Product from '../components/Bai Tap/EX5/Product.vue'
import Order from '../components/Bai Tap/EX5/Order.vue'
import Client from '../components/Bai Tap/EX5/Client.vue'
import Revenue from '../components/Bai Tap/EX5/Revenue.vue'
import Inventory from '../components/Bai Tap/EX5/Inventory.vue'
import SystemPage from '../components/Bai Tap/EX5/SystemPage.vue'
import Login from '../components/Bai Tap/EX5/Login.vue'

Vue.use(VueRouter)

const routes = [
  // {
  //   path: '/',
  //   name: 'Home',
  //   component: Home
  // },
  // {
  //   path: '/about',
  //   name: 'About',
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // },
  // {
  //   path: '/user/:id',
  //   name: 'User',
  //   component: () => import(/* webpackChunkName: "about" */ '../views/User.vue'),
  //   children: [
  //     {
  //       path: 'profile',
  //       component: Profile
  //     },
  //     {
  //       path: 'post',
  //       component: Post
  //     },
  //   ]
  // },
    //Unit 05
  {
    path: '/login',
    name : 'ProductPage',
    component: Login
  },
  {
    path : '/',
    name : 'Home',
    component: Home,
  },
  {
    path: '/product-management',
    name : 'ProductPage',
    component: ProductPage
  },
  {
    path: '/Mnbill',
    name : 'Mnbill',
    component: Mnbill
  },
  {
    path: '/Static',
    name : 'Static',
    component: Static
  },
  {
    path: '/product',
    name : 'Product',
    component: Product
  },
  {
    path: '/order',
    name : 'Order',
    component: Order
  },
  {
    path: '/User',
    name : 'User',
    component: User
  },
  {
    path: '/revenue',
    name : 'Revenue',
    component: Revenue
  },
  {
    path: '/inventory',
    name : 'Inventory',
    component: Inventory
  },
  {
    path: '/system',
    name : 'SystemPage',
    component: SystemPage
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
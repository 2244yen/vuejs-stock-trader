import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home.vue'
import Portfolio from '../components/portfolio/Portfolio.vue'
import Stock from '../components/stock/Stocks.vue'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/portfolio',
      name: 'portfolio',
      component: Portfolio
    },
    {
      path: '/stock',
      name: 'stock',
      component: Stock
    }
  ]
})

export default router
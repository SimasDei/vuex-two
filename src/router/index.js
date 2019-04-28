import Vue from 'vue'
import Router from 'vue-router'
import ProductList from '../components/ProductList.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Product List',
      component: ProductList
    }
  ]
})

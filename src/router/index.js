import { createRouter, createWebHistory } from 'vue-router'
import ProductView from '@/views/ProductView.vue'
// import AddProduct from '@/views/AddProduct.vue'
import CartView from '@/views/CartView.vue'
import LoginAdmin from '@/views/LoginAdmin.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'login',
      component: LoginAdmin
    },
    {
      path: '/products',
      name: 'products',
      component: ProductView
    },
    // {
    //   path: '/addproduct',
    //   name: 'addproduct',
    //   component: AddProduct
    // },
    {
      path: '/cart',
      name: 'cart',
      component: CartView
    }
  ]
})

export default router

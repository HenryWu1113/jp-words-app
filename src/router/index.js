import { createRouter, createWebHashHistory } from 'vue-router'
import HeaderView from '@/views/HeaderView.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Header',
      component: HeaderView,
      children: [
        {
          path: '',
          name: 'Home',
          component: () => import('@/views/HomeView.vue')
        }
      ]
    }
  ]
})

export default router

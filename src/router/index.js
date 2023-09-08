import { createRouter, createWebHistory, RouterView } from 'vue-router'
import App from '../App.vue'
import Tr from "@/i18n/translation"

const router = createRouter({
  history: createWebHistory(import.meta.env.VITE_BASE_URL),
  routes: [
    {
      path: "/:locale?",
      component: RouterView,
      beforeEnter: Tr.routeMiddleware,
      children: [
        {
          path: '',
          name: 'home',
          component: App
        },
        
      ]
    }
  ]
})

export default router

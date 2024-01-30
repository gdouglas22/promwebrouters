import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import UsersView from '../views/UsersView.vue'

const routes = [
  {
    path: '/home',
    component: HomeView
  },
  {
    path: '/users/:id',
    component: UsersView
  },
  {
    path: '/',
    component: HomeView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

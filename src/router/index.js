import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import HolaMundo from '../components/HolaMundo.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/about', name: 'About', component: HolaMundo },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

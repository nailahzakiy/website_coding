import { createRouter, createWebHistory } from 'vue-router'

import Home from '../view/Home.vue'
import About from '../view/About.vue'
import Projects from '../view/Projects.vue'
import Contact from '../view/Contact.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/about', name: 'About', component: About },
  { path: '/projects', name: 'Projects', component: Projects },
  { path: '/contact', name: 'Contact', component: Contact },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router

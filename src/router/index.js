import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import History  from '../views/History.vue'
import Network  from '../views/Network.vue'
import Work  from '../views/Work.vue'
import Menu  from '../views/Menu.vue'


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },

  {
    path: '/History',
    name: 'History',
    component: History
  },

  {
    path: '/Network',
    name: 'Network',
    component: Network
  },

  {
    path: '/Work',
    name: 'Work',
    component: Work
  },

  {
    path: '/Menu',
    name: 'Menu',
    component: Menu
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router

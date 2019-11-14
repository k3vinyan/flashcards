import Vue from 'vue'
import VueRouter from 'vue-router'
import Cards from '../views/Cards.vue'
import New from '../views/New.vue'
import Show from '../views/Show.vue'
import Edit from '../views/Edit.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: '/words'
  },
  {
    path: '/words',
    name: 'words',
    components: Words
  },
  {
    path: '/words/new',
    name: 'new-word',
    component: New
  },
  {
    path: '/words/:id',
    name: 'show',
    component: Show
  },
  {
    path: '/words/:id/edit',
    name: 'edit',
    component: Edit
  },
  {
    path: '/test',
    name: 'test',
    component: Test
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

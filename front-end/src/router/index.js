import Vue from 'vue';
import Router from 'vue-router';
import Cards from '../views/Cards.vue';
import New from '../views/New.vue';
import Show from '../views/Show.vue';
import Edit from '../views/Edit.vue';
import Test from '../views/Test.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  linkActiveClass: 'active',
  routes: [
    {
      path: '/',
      redirect: '/cards'
    },
    {
      path: '/cards',
      name: 'cards',
      component: Cards
    },
    {
      path: '/cards/new',
      name: 'new-card',
      component: New
    },
    {
      path: '/cards/:id',
      name: 'show',
      component: Show
    },
    {
      path: '/cards/:id/edit',
      name: 'edit',
      component: Edit
    },
    {
      path: '/test',
      name: 'test',
      component: Test
    }
  ]
});


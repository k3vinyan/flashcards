import Vue from 'vue';
import Router from 'vue-router';
import Categories from '../views/Categories.vue';
import CategoriesNew from '../views/Category/New.vue';
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
      redirect: '/categories'
    },
    {
      path: '/categories',
      name: 'categories',
      component: Categories
    },
    {
      path: '/categories/new',
      name: 'new',
      component: CategoriesNew
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


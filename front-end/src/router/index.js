import Vue from 'vue';
import Router from 'vue-router';
import Categories from '../views/Categories.vue';
import CategoryNew from '../views/Category/New.vue';
import CategoryShow from '../views/Category/Show.vue';
import CategoryEdit from '../views/Category/Edit.vue';
//import Show from '../views/Show.vue';
//import Edit from '../views/Edit.vue';
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
      name: 'category-new',
      component: CategoryNew
    },
    {
      path: '/categories/:id/cards',
      name: 'category-show',
      component: CategoryShow
    },
    {
      path: '/categories/:id/cards/edit',
      name: 'edit',
      component: CategoryEdit
    },
    {
      path: '/test',
      name: 'test',
      component: Test
    }
  ]
});


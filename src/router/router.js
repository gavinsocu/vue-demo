import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/:catchAll(.*)', component: () => import('../pages/home.vue') },
    {
      path: '/',
      name: '',
      redirect: '/home',
    },

    {
      path: '/home',
      name: 'home',
      component: () => import('../pages/home.vue'),
      meta: {
        home: true,
      },
    },
    {
      path: '/user',
      name: 'user',
      component: () => import('../pages/user.vue'),
      meta: {
        user: true,
      },
    },
    {
      path: '/user/myMassage',
      name: 'myMassage',
      component: () => import('../pages/userPages/myMassage.vue'),
      meta: {
        childrenPage: true,
      },
    },
    {
      path: '/user/historyMassage',
      name: 'historyMassage',
      component: () => import('../pages/userPages/historyMassage.vue'),
      meta: {
        childrenPage: true,
      },
    },
    {
      path: '/user/moneyMassage',
      name: 'moneyMassage',
      component: () => import('../pages/userPages/moneyMassage.vue'),
      meta: {
        childrenPage: true,
      },
    },
    {
      path: '/classify',
      name: 'classify',
      component: () => import('../pages/classify.vue'),
      meta: {
        classify: true,
      },
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../pages/about.vue'),
      meta: {
        about: true,
      },
    },
  ],
});

export default router;

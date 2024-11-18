import { createRouter, createWebHashHistory, createWebHistory } from "vue-router";
import Homeview from '@/views/Homeview.vue';
import Jobsview from '@/views/Jobsview.vue';
import NotFoundView from '@/views/NotFoundView.vue';

const router = createRouter({
  history: createWebHistory (import.meta.env.BASE_URL),
  routes:[
    {
      path:'/',
      name:'home',
      component: Homeview,
    },
    {
      path:'/jobs',
      name:'jobs',
      component: Jobsview,
    },
    {
      path: '/:catchAll(.*)',
      name: 'not-found',
      component: NotFoundView,
    }
  ],
});

export default router;
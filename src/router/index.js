import { createRouter, createWebHashHistory, createWebHistory } from "vue-router";
import Homeview from '@/views/Homeview.vue';
import Jobsview from '@/views/Jobsview.vue';
import NotFoundView from '@/views/NotFoundView.vue';
import jobview from '@/views/jobview.vue';
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
     path: '/jobs/:id',
     name: 'job',
     component:jobview,

    },
    {
      path: '/:catchAll(.*)',
      name: 'not-found',
      component: NotFoundView,
    }
  ],
});

export default router;
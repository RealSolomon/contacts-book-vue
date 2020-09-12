import Vue from 'vue';
import VueRouter from 'vue-router';
import Contacts from '../views/Contacts.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Contacts,
  },
  {
    path: '/info',
    name: 'ContactInfo',
    component: () => import('../views/ContactInfo.vue'),
  },
];

const router = new VueRouter({
  routes,
});

export default router;

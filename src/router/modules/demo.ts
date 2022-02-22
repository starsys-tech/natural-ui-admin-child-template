import { RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/jump',
    name: 'Jump',
    component: () => import(/* webpackChunkName: "jump" */ '@/views/demo/jump/index.vue'),
  },
  {
    path: '/theme',
    name: 'Theme',
    component: () => import(/* webpackChunkName: "theme" */ '@/views/demo/theme/index.vue'),
  },
];

export default routes;

import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: () => import(/* webpackChunkName: "home" */ '../views/home/index.vue'),
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/about/index.vue'),
  },
  {
    path: '/jump',
    name: 'Jump',
    component: () => import(/* webpackChunkName: "jump" */ '../views/jump/index.vue'),
  },
  {
    path: '/theme',
    name: 'Theme',
    component: () => import(/* webpackChunkName: "theme" */ '../views/theme/index.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(window.__MICRO_APP_BASE_ROUTE__ || process.env.BASE_URL),
  routes,
});

/**
 * 解决浏览器后退问题
 * https://github.com/micro-zoe/micro-app/issues/155
 */
if (window.__MICRO_APP_ENVIRONMENT__) {
  // 如果__MICRO_APP_BASE_ROUTE__为 `/基座应用基础路由/子应用基础路由/`，则应去掉`/基座应用基础路由`
  // 如果对这句话不理解，可以参考案例：https://github.com/micro-zoe/micro-app-demo
  const publicPath = window.microApp.getData().publicPath; // 主应用publicPath
  const realBaseRoute = window.__MICRO_APP_BASE_ROUTE__.replace(publicPath, ''); // publicPath替换为空字符串

  router.beforeEach(() => {
    if (typeof window.history.state.current === 'string') {
      window.history.state.current = window.history.state.current.replace(
        new RegExp(realBaseRoute, 'g'),
        ''
      );
    }
  });

  router.afterEach(() => {
    if (typeof window.history.state === 'object') {
      window.history.state.current = realBaseRoute + (window.history.state.current || '');
    }
  });
}

export default router;

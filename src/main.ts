import './public-path';
import '@/styles/tailwind.css';
import { createApp } from 'vue';
import naive from 'naive-ui';
import App from './App.vue';
import router from './router';
import { setupStore } from '@/store';
// import { useUserStoreWidthOut } from '@/store/modules/user';
// import { useDesignStoreWidthOut } from '@/store/modules/design';
// import { isBoolean } from 'natural-utils/lib/is';

const app = createApp(App);
app.use(naive);
setupStore(app);
app.use(router);
app.mount('#app');

function dataListener(data: any) {
  console.log('vue3-app来自基座应用的数据', data);

  /**
   * router
   */
  // 主应用控制路由跳转
  if (data.pageRoute) {
    router.replace(data.pageRoute);
  }
}
if (window.microApp) {
  window.microApp.addDataListener(dataListener, true);
}

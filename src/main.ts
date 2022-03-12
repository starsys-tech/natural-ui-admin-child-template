import './public-path';
import '@/styles/tailwind.css';
import { createApp } from 'vue';
import naive from 'naive-ui';
import App from './App.vue';
import router from './router';
import { setupStore } from '@/store';
import { useDesignSettingWithOut } from '@/store/modules/designSetting';

const app = createApp(App);

app.use(naive);
setupStore(app);
app.use(router);
app.mount('#app');

function dataListener(data: any) {
  /**
   * router
   */
  // 主应用控制路由跳转
  if (data.pageRoute) {
    router.replace(data.pageRoute);
  }

  /**
   * 主应用下发的工具
   */
  if (data.DesignUtils) {
    app.config.globalProperties.$design = new data.DesignUtils(useDesignSettingWithOut);
  }
}
if (window.microApp) {
  window.microApp.addDataListener(dataListener, true);
}

import './public-path';
import '@/styles/tailwind.css';
import { createApp } from 'vue';
import naive from 'naive-ui';
import App from './App.vue';
import router from './router';
import { setupStore } from '@/store';
import { useDesignSettingWithOut } from '@/store/modules/designSetting';

const app = createApp(App);

const { DesignUtils } = window.microApp.getData();
app.config.globalProperties.$design = new DesignUtils(useDesignSettingWithOut);

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
}
window.microApp.addDataListener(dataListener, true);

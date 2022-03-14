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

window.microAppData = {}; // 记录主应用下发的数据，micro-app提供的api只能获取变化的数据
function dataListener(data: any) {
  window.microAppData = {
    ...window.microAppData,
    ...data,
  };
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
  const { DesignUtils } = data;
  if (DesignUtils) {
    app.config.globalProperties.$design = new DesignUtils(useDesignSettingWithOut);
  }
}
window.microApp.addDataListener(dataListener, true);

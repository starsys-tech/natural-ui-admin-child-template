<template>
  <n-config-provider
    :locale="zhCN"
    :theme="design.getDarkTheme"
    :theme-overrides="design.themeOverrides"
    :date-locale="dateZhCN"
  >
    <div class="childapp-inner">
      <div id="nav">
        <router-link to="/">Home</router-link> | <router-link to="/about">About</router-link> |
        <router-link to="/jump">Jump</router-link> |
        <router-link to="/theme">Theme</router-link>
      </div>
      <router-view />
    </div>
  </n-config-provider>
</template>

<script lang="ts" setup>
  import { reactive } from 'vue';
  import { zhCN, dateZhCN, darkTheme } from 'naive-ui';
  import { useDesignSettingStore } from '@/store/modules/designSetting';

  const design = reactive({
    themeOverrides: {},
    getDarkTheme: undefined,
  });
  const designStore = useDesignSettingStore(); // 子应用的主题状态

  // 监听主应用主题store改变
  function designStoreListener(data) {
    const { designStore: mainDesignStore } = data;
    if (mainDesignStore) {
      design.themeOverrides = mainDesignStore.getThemeOverrides;
      design.getDarkTheme = mainDesignStore.darkTheme ? darkTheme : undefined;
      designStore.darkTheme = mainDesignStore.darkTheme; // 在子应用同步主应用的暗黑模式状态
    }
  }
  if (window.microApp) {
    window.microApp.addDataListener(designStoreListener, true);
  }
</script>

<style lang="less">
  @import '../../../common/styles/var.less';
  .childapp-inner {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

  #nav {
    padding: 30px;

    a {
      font-weight: bold;
      color: #2c3e50;
    }
    .router-link-exact-active {
      @apply text-primary;
    }
  }
</style>

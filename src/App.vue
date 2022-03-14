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

  const { useDesignSettingStore: useBaseDesignSettingStore } = window.microApp.getData(); // App.vue入口文件使用window.microApp.getData(),其他页面文件则使用window.microAppData

  const baseDesignStore = useBaseDesignSettingStore(); // 主应用主题store
  const designStore = useDesignSettingStore(); // 子应用自己的主题store，只记录darkTheme

  const design = reactive({
    themeOverrides: baseDesignStore.getThemeOverrides,
    getDarkTheme: baseDesignStore.darkTheme ? darkTheme : undefined,
  });

  baseDesignStore.$subscribe(() => {
    design.themeOverrides = baseDesignStore.getThemeOverrides;
    design.getDarkTheme = baseDesignStore.darkTheme ? darkTheme : undefined;
    designStore.darkTheme = baseDesignStore.darkTheme; // 在子应用同步主应用的暗黑模式状态
  });
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

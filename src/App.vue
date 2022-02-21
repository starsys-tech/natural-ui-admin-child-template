<template>
  <n-config-provider
    :locale="zhCN"
    :theme="design.getDarkTheme"
    :theme-overrides="design.themeOverrides"
    :date-locale="dateZhCN"
  >
    <div class="childapp-inner">
      <div id="nav">
        <p><i>nav颜色不变的，不要关注啦</i></p>
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

  const design = reactive({
    themeOverrides: {},
    getDarkTheme: undefined,
  });

  // 监听主应用主题store改变
  function designStoreListener(data) {
    const { designStore } = data;
    if (designStore) {
      design.themeOverrides = designStore.getThemeOverrides;
      design.getDarkTheme = designStore.darkTheme ? darkTheme : undefined;
    }
  }
  window.microApp.addDataListener(designStoreListener, true);
</script>

<style lang="less">
  @import '../../../common/styles/index.less';
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

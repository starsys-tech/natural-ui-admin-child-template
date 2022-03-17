<template>
  <n-config-provider :theme="design.getDarkTheme" :theme-overrides="design.themeOverrides">
    <slot></slot>
  </n-config-provider>
</template>
<script lang="ts" setup>
  import { reactive } from 'vue';
  import { NConfigProvider, darkTheme } from 'naive-ui';
  /**
   * 适配主题的渲染到主应用的组件容器
   */
  const props = defineProps({
    useDesignSettingStore: {
      type: Function,
      default: () => ({}),
    },
  });

  const designStore = props.useDesignSettingStore();
  const design = reactive({
    themeOverrides: designStore.getThemeOverrides,
    getDarkTheme: designStore.darkTheme ? darkTheme : undefined,
  });

  designStore.$subscribe(() => {
    design.themeOverrides = designStore.getThemeOverrides;
    design.getDarkTheme = designStore.darkTheme ? darkTheme : undefined;
  });
</script>
<style lang=""></style>

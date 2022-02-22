<template>
  <div class="vue3-jump">
    <n-button type="primary" @click="goMainAbout">Go MainApp/about</n-button> |
    <n-button @click="router.back">Go Back</n-button>
  </div>
</template>
<script lang="ts" setup>
  /**
   * 测试应用跳转
   */
  import { useRouter } from 'vue-router';

  const router = useRouter();

  function goMainAbout() {
    if (window.microApp) {
      const { mainRouter } = window.microApp.getData();
      mainRouter.push({
        name: 'about_index',
      });
    }
  }
</script>

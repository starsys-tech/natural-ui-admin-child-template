<template>
  <div class="about">
    <h1>This is an about page</h1>
    <p>{{ msg ? `来自主应用的消息：${msg}` : '' }}</p>
  </div>
</template>

<script lang="ts" setup>
  import { useRoute } from 'vue-router';

  const route = useRoute();
  const { msg } = route.query;
</script>

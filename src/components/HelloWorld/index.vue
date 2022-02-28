<template>
  <h1>{{ props.content }}</h1>
</template>
<script lang="ts" setup>
  /**
   * 公用组件demo
   */

  const props = defineProps({
    content: {
      type: String,
      default: 'Hello World',
    },
  });
</script>

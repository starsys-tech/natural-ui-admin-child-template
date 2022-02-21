<template>
  <div>
    <n-el tag="span" style="color: var(--primary-color)"> naive-ui theme color </n-el>
    <p class="skin-text">我是随背景图片变换颜色的文字</p>
    <n-el
      class="switch-text"
      tag="span"
      :style="`color: var(--${statusColor})`"
      @click="changeColor"
    >
      点我切换状态色
    </n-el>
  </div>
</template>
<script lang="ts" setup>
  /**
   * 测试主题切换
   */
  import { computed, ref } from 'vue';

  const colors = ['primary-color', 'warning-color', 'success-color'];
  const no = ref(0);
  function changeColor() {
    if (no.value >= colors.length - 1) {
      no.value = 0;
      return;
    }
    no.value += 1;
  }
  const statusColor = computed(() => colors[no.value]);
</script>
<style lang="less" scoped>
  .switch-text {
    cursor: pointer;
  }
</style>

<template>
  <n-config-provider :theme="theme" class="h-screen w-screen flex">
    <aside class="h-full w-[200px] flex flex-none flex-col bg-blue-500">aside</aside>
    <div class="flex-auto">main</div>
  </n-config-provider>
</template>

<script setup lang="ts">
import type { GlobalTheme } from 'naive-ui';
import { ref } from 'vue';

const theme = ref<GlobalTheme | null>(null);
</script>

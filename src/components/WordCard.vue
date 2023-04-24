<template>
  <div class="wordCard border border-white p-3 rounded-[5px] flex items-center">
    <p class="text-[16px] border-r pr-3">食べ物</p>
    <p class="text-[16px] px-3">たべもの</p>
    <div class="border border-white w-[20px] h-[20px] flex items-center justify-center mr-auto">
      <p class="text-[12px]">2</p>
    </div>
    <n-icon :component="CaretForwardCircle" size="22" class="cursor-pointer"></n-icon>
  </div>
</template>

<script setup>
import { CaretForwardCircle } from '@vicons/ionicons5'
</script>

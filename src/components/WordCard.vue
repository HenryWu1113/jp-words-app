<template>
  <div class="wordCard border border-white p-3 rounded-[5px] flex items-center">
    <p class="text-[16px] border-r pr-3">{{ data.word }}</p>
    <p class="text-[16px] px-3">{{ data.hiragana }}</p>
    <div class="border border-white w-[20px] h-[20px] flex items-center justify-center mr-auto">
      <p class="text-[12px]">{{ data.tone }}</p>
    </div>
    <n-icon :component="CaretForwardCircle" size="22" class="cursor-pointer"></n-icon>
  </div>
</template>

<style lang="scss" scoped>
.wordCard + .wordCard {
  margin-top: 10px;
}
</style>

<script setup>
import { CaretForwardCircle } from '@vicons/ionicons5'

const props = defineProps(['data'])
console.log(props.data)
</script>

<template>
  <n-input v-model:value="keyword" placeholder="搜尋單字" clearable></n-input>
  <div class="wordCardWrap mt-5 text-white">
    <WordCard />
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import WordCard from '@/components/WordCard.vue'

const keyword = ref('')

onMounted(() => {
  console.log('onMounted')
})

onBeforeUnmount(() => {
  console.log('onBeforeUnmount')
})
</script>

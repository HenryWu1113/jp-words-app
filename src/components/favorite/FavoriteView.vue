<template>
  <n-input v-model:value="keyword" placeholder="輸入文字"></n-input>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

const keyword = ref('50')

onMounted(() => {
  console.log('onMounted')
})

onBeforeUnmount(() => {
  console.log('onBeforeUnmount')
})
</script>

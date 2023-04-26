<template>
  <n-input v-model:value="keyword" placeholder="搜尋單字" clearable></n-input>
  <div class="wordCardWrap mt-5 text-white">
    <WordCard v-for="item in words" :key="item" :data="item" />
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import WordCard from '@/components/WordCard.vue'
import { api } from '@/plugins/axios'
const keyword = ref('')
const words = ref([])
onMounted(() => {
  console.log('onMounted')
})

onBeforeUnmount(() => {
  console.log('onBeforeUnmount')
})

const getFilterWords = async () => {
  try {
    const { data } = await api.get('/words')
    console.log(data)
    words.value = [...data.result]
  } catch (error) {
    console.log(error)
  }
}

getFilterWords()
</script>

<template>
  <section class="pt-12 md:pt-20 px-5 bg-black h-screen">
    <div class="sm:px-0 container mx-auto">
      <n-tabs
        justify-content="space-around"
        type="bar"
        :tab-style="{ color: 'white', fontSize: '18px' }"
        animated
        size="large"
        @update:value="updateTab"
      >
        <n-tab-pane name="All" tab="全部單字">
          <AllView />
        </n-tab-pane>
        <n-tab-pane name="Favorite" tab="我的最愛">
          <FavoriteView />
        </n-tab-pane>
        <!-- <n-tab-pane name="jay chou" tab="Jay Chou"></n-tab-pane> -->
      </n-tabs>
    </div>
  </section>
</template>

<style lang="scss" scoped>
:deep(.n-tabs-bar) {
  background-color: white !important;
}
</style>

<script setup>
// import { ref } from 'vue'
import FavoriteView from '@/components/favorite/FavoriteView.vue'
import AllView from '@/components/All/AllView.vue'

const updateTab = (value) => {
  console.log(value)
}
</script>

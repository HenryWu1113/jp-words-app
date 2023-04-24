<template>
  <div
    class="w-screen h-screen bg-black fixed left-0 top-0 z-[9999] flex items-center justify-center"
  >
    <div class="w-[90%] ssm:w-[480px] border border-white rounded-[10px] p-5">
      <div class="flex items-center justify-end">
        <n-icon
          :component="Close"
          color="white"
          size="28"
          class="cursor-pointer"
          @click="emit('closeDialog')"
        ></n-icon>
      </div>
      <n-tabs
        justify-content="space-around"
        type="bar"
        :tab-style="{ color: 'white', fontSize: '18px' }"
        animated
        @update:value="updateTab"
      >
        <n-tab-pane name="login" tab="登入">
          <n-input v-model:value="account" placeholder="帳號" clearable></n-input>
          <n-input
            class="mt-[10px]"
            v-model:value="password"
            placeholder="密碼"
            clearable
          ></n-input>
          <n-button type="info" color="white" ghost dashed class="mt-[10px] w-min self-end"
            >登入</n-button
          >
        </n-tab-pane>
        <n-tab-pane name="registor" tab="註冊">
          <n-input v-model:value="account" placeholder="帳號" clearable></n-input>
          <n-input
            class="mt-[10px]"
            v-model:value="password"
            placeholder="密碼"
            clearable
          ></n-input>
          <n-button type="info" color="white" ghost dashed class="mt-[10px] w-min self-end"
            >註冊</n-button
          >
        </n-tab-pane>
      </n-tabs>
    </div>
  </div>
</template>

<style lang="scss" scoped>
:deep(.n-tabs-bar) {
  background-color: white !important;
}
.n-tab-pane {
  display: flex;
  flex-direction: column;
}
</style>

<script setup>
import { ref } from 'vue'
import { Close } from '@vicons/ionicons5'
const account = ref('')
const password = ref('')

const emit = defineEmits(['closeDialog'])

const updateTab = () => {
  account.value = ''
  password.value = ''
}
</script>

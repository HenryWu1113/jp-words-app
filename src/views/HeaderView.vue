<template>
  <header
    class="w-screen bg-black border-b border-white fixed top-0 left-0 flex items-center px-6 h-12 md:h-20"
  >
    <n-icon
      :component="Beer"
      size="30"
      class="cursor-pointer text-white hover:text-purple-300 md:hidden mr-auto"
    ></n-icon>
    <p
      class="text-white text-3xl font-bold md:text-4xl md:absolute md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2"
    >
      日文單字卡
    </p>
    <n-icon
      v-if="!isLogin"
      @click="loginoutDialog = true"
      :component="LogInOutline"
      size="40"
      class="cursor-pointer text-white hover:text-purple-300 hidden md:block ml-auto"
    ></n-icon>
    <n-icon
      v-if="isLogin"
      :component="LogOutOutline"
      @click="logout"
      size="40"
      class="cursor-pointer text-white hover:text-purple-300 hidden md:block ml-auto"
    ></n-icon>
  </header>
  <!-- <transition name="myDialog"> -->
  <LoginoutView
    v-if="loginoutDialog"
    @closeDialog="loginoutDialog = false"
    @login="userLogin"
    @register="userRegister"
  />
  <!-- </transition> -->
  <RouterView />
</template>
<!-- 
  'sm': '640px',
  // => @media (min-width: 640px) { ... 
  'md': '768px',
  // => @media (min-width: 768px) { ... 
  'lg': '1024px',
  // => @media (min-width: 1024px) { ... 
  'xl': '1280px',
  // => @media (min-width: 1280px) { ... 
  '2xl': '1536px',
  // => @media (min-width: 1536px) { ... }
    }
-->
<style lang="scss" scoped>
// .myDialog-enter-active,
// .myDialog-leave-active {
//   transition: all 0.2s ease !important;
// }

// .myDialog-enter-from,
// .myDialog-leave-to {
//   opacity: 0 !important;
//   transform: scale(0.9) !important;
// }
</style>

<script setup>
import { Beer, LogInOutline, LogOutOutline } from '@vicons/ionicons5'
import { ref } from 'vue'
import { RouterView } from 'vue-router'
import LoginoutView from '@/components/LoginoutView.vue'
import { useUserStore } from '@/stores/user'
import { storeToRefs } from 'pinia'
import { api, apiAuth } from '@/plugins/axios'
const { isLogin } = storeToRefs(useUserStore())
const { login, logout } = useUserStore()

const loginoutDialog = ref(false)

const userRegister = async (account, password) => {
  try {
    await api.post('/users', {
      account,
      password
    })
    loginoutDialog.value = false
    alert('註冊成功')
  } catch (error) {
    alert('註冊失敗')
  }
}

const userLogin = async (account, password) => {
  // console.log('userLogin')
  // console.log(account)
  // console.log(password)
  const ans = await login({
    account,
    password
  })
  if (ans) loginoutDialog.value = false
}
</script>

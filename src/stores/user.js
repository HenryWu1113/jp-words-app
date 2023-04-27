import { defineStore } from 'pinia'
import { api, apiAuth } from '@/plugins/axios'
import router from '@/router'

export const useUserStore = defineStore('user', {
  state: () => {
    return {
      token: '',
      account: '',
      role: 0,
      likes: []
    }
  },
  getters: {
    isLogin() {
      return this.token.length !== 0
    },
    isAdmin() {
      return this.role === 1
    }
  },
  actions: {
    async login(form) {
      try {
        console.log(form)
        // return
        const { data } = await api.post('/users/login', form)
        this.token = data.result.token
        this.account = data.result.account
        this.role = data.result.role
        this.likes = data.result.likes.map((item) => item._id)
        alert('登入成功')
        return true
      } catch (error) {
        alert('登入失敗')
        console.log(error)
      }
      router.push('/')
    },
    async logout() {
      try {
        await apiAuth.delete('/users/logout')
        this.token = ''
        this.account = ''
        this.role = 0
        this.likes = []
        alert('登出成功')
      } catch (error) {
        this.token = ''
        this.account = ''
        this.role = 0
        this.likes = []
        alert('登出失敗')
      }
    }
    // async getUser() {
    //   if (this.token.length === 0) return
    //   try {
    //     const { data } = await apiAuth.get('/users')
    //     this.account = data.result.account
    //     this.email = data.result.email
    //     this.nickname = data.result.nickname
    //     this.avatar = data.result.avatar
    //     this.cart = data.result.cart
    //     this.likes = data.result.likes
    //     this.role = data.result.role
    //   } catch (error) {
    //     this.logout()
    //   }
    // }
  },
  persist: {
    enabled: true,
    strategies: [{ key: 'token', storage: sessionStorage, paths: ['token'] }]
  }
})

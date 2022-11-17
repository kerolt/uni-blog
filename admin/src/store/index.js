import { defineStore } from 'pinia'

export const useStore = defineStore('store', {
  state: () => ({
    collapse: false,
    token: localStorage.getItem('token') || ''
  }),
  actions: {
    changeCollapse() {
      this.collapse = !this.collapse
    }
  }
})

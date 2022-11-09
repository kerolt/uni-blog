import { defineStore } from 'pinia'

export const useStore = defineStore('store', {
  state: () => ({
    collapse: false
  }),
  actions: {
    changeCollapse() {
      this.collapse = !this.collapse
    }
  }
})

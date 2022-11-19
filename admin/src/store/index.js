import { defineStore } from 'pinia'

export const useStore = defineStore('store', {
  state: () => ({
    collapse: false,
    token: localStorage.getItem('token') || '',
    tabList: [{ name: '首页', path: '/home' }]
  }),
  actions: {
    changeCollapse() {
      this.collapse = !this.collapse
    },
    resetTab() {
      // 重置tab列表
      this.tabList = [{ name: '首页', path: '/home' }]
    },
    removeTab(item) {
      this.tabList.splice(
        this.tabList.findIndex((it) => it.name === item.name),
        1
      )
    }
  },
  persist: {
    enabled: true,
    strategies: [
      { storage: sessionStorage, paths: ['collapse', 'tabList'] }
    ]
  }
})

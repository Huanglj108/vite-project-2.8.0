import { defineStore } from "pinia";

export const useUserStore = defineStore('counter',{
  state:() => {
    return {
      name: "小猪课堂",
      age: 25,
      sex: "男",
    }
  },
  persist: true,
  getters: {
    getPerson: (state) => {
      return `${state.name}今年${state.age}`
    },
    getPerson1: (state) => {
      return `${state.name}今年${state.age}`
    }
  },
  actions: {
    // 同步更新name值？
    updateNameSync(newName: string) {
      this.name = newName
      return '同步修改state中的name值完成'
    },
    
    // 异步更新 name 值
    async updateName(newName: string) {
      return new Promise((resolve) => {
        setTimeout(() => {
          // 这里的 this 是当前的 Store 实例
          this.name = newName
          resolve('异步修改完成')
        },3000)
      })
    }
  }
  
})
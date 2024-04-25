import { defineStore } from "pinia";

export const useCounterStore = defineStore('counter',{
  state:() => {
    return {
      name: "小猪课堂",
      age: 25,
      sex: "男",
    }
  },

  
})
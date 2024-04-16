import { createRouter, createWebHistory, createWebHashHistory } from "vue-router";
// 调用Vue.use() 函数，把VueRouter 安装为 Vue 的插件

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path:'/',
      name: 'HelloWorld',
      component:()=> import('@/components/HelloWorld.vue')
    }
  ]
})

export default router
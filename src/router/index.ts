import { createRouter, createWebHistory, createWebHashHistory, RouteRecordRaw } from "vue-router";
// 调用Vue.use() 函数，把VueRouter 安装为 Vue 的插件

const routes: RouteRecordRaw[] = [
  {
    path:'/',
    name:'HelloWorld',
    component: () => import('@/components/HelloWorld.vue')
  },
  {
    path: '/MyHome',
    name:'MyHome',
    component: () => import('@/components/MyHome.vue')
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router



// const router = createRouter({
//   history: createWebHashHistory(),
//   routes: [
//     {
//       path:'/',
//       name: 'HelloWorld',
//       component:()=> import('@/components/HelloWorld.vue'),
//       children:[
//         {
//           path:'/about',
//           name:'about',
//           component: () => import('@/components/about/about.vue')
//         }
//       ]
//     },
//     {
//       path: '/MyHome',
//       name:'MyHome',
//       component: () => import('@/components/MyHome.vue')
//     }
//   ]
// })

// export default router
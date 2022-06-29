import { createRouter, createWebHashHistory } from "vue-router"
import NProgress from "nprogress"
import store from "../store"

const routes = [
  {
    path: "/index",
    name: "index",
    component: () => import("../views/index.vue"),
    redirect: "homePage",
    children: [
      {
        path: "/homePage",
        name: "homePage",
        component: () => import("../views/homePage/index.vue")
      },
      {
        path: "/workBench",
        name: "workBench",
        component: () => import("../views/workBench/index.vue")
      },
      {
        path: "/applicationLibrary",
        name: "applicationLibrary",
        component: () => import("../views/applicationLibrary/index.vue")
      }
    ]
  },
  {
    path: "/",
    name: "login",
    component: () => import("../views/login.vue")
  }
]
const router = createRouter({
  history: createWebHashHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  NProgress.start()
  store.state.requests.forEach(xhr => xhr.cancel()) // 通过遍历终止所有未完成的请求
  store.state.requests = [] // 执行完清空，等待下一次的页面的请求装载
  next()
})

router.afterEach(() => {
  NProgress.done()
})

export default router

import Vue from 'vue'
import Router from 'vue-router'
import {appRouter} from './index.js'

Vue.use(Router)
const router = appRouter
// const userId = window.localStorage.getItem('userId')
// 放这里是不行的下面有注释

router.beforeEach((to, from, next) => {
  const userId = window.localStorage.getItem('userId')
  // 每回切换路由的时候 都应该去获取一下userId  如果在上面获取的话  则只会在初始化的时候做一次判断  所以找不到userId就会去走/login
  // 这三句话就不翻译了   能看懂吧都
  // console.log(to)
  // console.log(from)
  // console.log(next)
  if (to.path !== '/login') {
    if (userId) {
      next()
    } else {
      next({
        path: '/login'
        // query: {
        //   redirect: to.fullPath
        // }
      }) // 将要跳转的路由作为路由路径参数传进去登录成功则跳转至对应页面  后面会用到
    }
    next()
  } else {
    next()
  }
})
export default router

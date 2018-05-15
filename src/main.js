// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import VueLazyComponent from '@xunlei/vue-lazy-component'
import Vue from 'vue'
import App from './App'

// 因为加了路由的守卫  所以引入的是router.js   把配置路由的index文件  引到了router里面  故直接抛出的router.js
import router from './router/router.js'

// 引入状态管理机制store
import store from './store'

// 引入echarts
import echarts from 'echarts'
// 引入iview
import iView from 'iview'
import 'iview/dist/styles/iview.css'

// import {Button} from 'antd'

// 引入公共样式
import './common/css/common.css'

// 引入axios
import axios from 'axios'
import vueAxios from 'vue-axios'

// console.log(Button)

// 全局挂载vue-lazy-component
Vue.use(VueLazyComponent)
// 全局挂载axios
Vue.use(vueAxios, axios)
// 全局挂载iview
Vue.use(iView)
// 全局挂载echrts
Vue.use(echarts)

// 暂时没看出来有啥用
// Vue.prototype.router = router
Vue.prototype.$echarts = echarts
//  暂时没看出来有啥用
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  echarts, // 全局无用啊
  store,
  components: { App },
  template: '<App/>'
})

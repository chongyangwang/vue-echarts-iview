import { GET_USER_INFO, GET_NEW_LIST, GET_PRODUCT_LINE_MONITOR_DATA } from './mutationTypes.js'
export default {
  // 第一个是默认参数state  之后是传递过来的参数
  [GET_USER_INFO] (state, params) {
    state.username = params.acount
    state.password = params.pwd
  },
  [GET_NEW_LIST] (state, newslist) {
    state.list = newslist
  },
  [GET_PRODUCT_LINE_MONITOR_DATA] (state, productlinechartdata) {
    state.barOptions = productlinechartdata.barOptions
    state.pieOptions = productlinechartdata.pieOptions
    state.lineOptions = productlinechartdata.lineOptions
  }
}

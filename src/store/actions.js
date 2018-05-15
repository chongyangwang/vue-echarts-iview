import {GET_USER_INFO, GET_NEW_LIST, GET_PRODUCT_LINE_MONITOR_DATA} from './mutationTypes'
// 注意actions  通过commit提交的也是字符串方法名  所以要引入actionsType.js
export default {
  // context包含 { dispatch, commit, state, getter }
  getUserInfo (context, ployed) { //  其后跟对象是ployed 为了应对传多个参数的情况
    return new Promise((resolve, reject) => {
      ployed._this.axios.post('/api/init/getuserinfo').then(function (res) {
        resolve(res)
        context.commit(GET_USER_INFO, res.data.data)
      })
    })
  },
  getNewList ({commit, state}, _this) {
    // console.log(_this.axios)       // 没有所以要把axios传过来
    return new Promise((resolve, reject) => {
      _this.axios.post('/api/init/getnewlist').then(function (res) {
        resolve(res)
        commit(GET_NEW_LIST, res.data.data)
      })
    })
  },
  //  先这样写吧  返回一个promise对象  然后把请求的结果resolve出去 再promise的then函数里面提交mutation
  getProductLineMonitorData ({commit, state}, _this) {
    return new Promise((resolve, reject) => {
      _this.axios.post('/api/productlinemonitor/productlinemonitordata').then(function (res) {
        resolve(res)
      }).catch(function (err) {
        reject(err)
      })
    }).then(function (res) {
      commit(GET_PRODUCT_LINE_MONITOR_DATA, JSON.parse(JSON.stringify(res.data.data)))
    })
  }
}

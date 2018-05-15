import Vue from 'vue'
import Vuex from 'vuex'
// state 可以拆分  也可以不拆分
import state from './state'
// 引入getters
import getters from './getters'
// 引入mutations
import mutations from './mutations.js'
// 引入actions
import actions from './actions.js'
//  全局挂载vuex
Vue.use(Vuex)

// 抛出store
export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})

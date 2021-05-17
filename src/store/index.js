/** @format */

import Vue from 'vue'
import Vuex from 'vuex'
import createLogger from 'vuex/dist/logger'
import modules from './modules'
import getters from './getters'
// 引入vuex 数据持久化插件
import createPersistedState from 'vuex-persistedstate'
Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'
export default new Vuex.Store({
  modules,
  getters,
  // strict: debug,
  plugins: debug ? [createPersistedState({
    key: 'userinfo',
    storage: window.sessionStorage // 选择sessionStorage 进行存储
    // paths:['user']
  }), createLogger()] : [createPersistedState({
    key: 'userinfo',
    storage: window.sessionStorage // 选择sessionStorage 进行存储
    // paths:['user']
  })]
})

import Vue from 'vue'
import Vuex from 'vuex'

import actions from './actions'
import mutations from './mutations'
import getters from './getters'

//安装插件
Vue.use(Vuex)

const state = {
  cartList: []
}
//创建store对象
const store = new Vuex.Store({
  state,
  actions,
  mutations,
  getters
})

//挂在Vue实例上
export default store
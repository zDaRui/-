import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from "./actions.js"
import * as getters from "./getters.js"

// 告诉 vue “使用” vuex
Vue.use(Vuex)

// 创建一个对象来保存应用启动时的初始状态
const state = {
  // 放置初始状态,应用启动时，count 置为0
  count: 0,
  curIndex:0,
  counts: 0
}

//  mutation ,放置我们的状态变更函数
const mutations = {
  // mutation 的第一个参数是当前的 state
  // 你可以在函数里修改 state
  add (state, amount) {  //increment
    state.count = state.count + amount
  },

  cut(state,num){
    if(state.count<=0){
      state.count=0
    }else{
      state.count = state.count - num
    }
  },

  changeCurIndex(state,index){
    state.curIndex=index;
  },
  increment: function (state) {
    state.counts++;
  },
  decrement: function (state) {
    state.counts--;
  }
}

// 整合初始状态和变更函数，我们就得到了我们所需的 store
// 至此，这个 store 就可以连接到我们的应用中
export default new Vuex.Store({
  state,
  actions,
  mutations,
  getters
})

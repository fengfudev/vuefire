
import Vue from 'vue'
import Vuex from 'vuex'
import Config from '../../config'

Vue.use(Vuex)

const state = {
  authUser: null,
  innerWidth: 0,
  innerHeight: 0,
  minViewHeight: 0
}

const getters = {
  innerWidth(state) {
    return state.innerWidth || window.innerWidth
  },

  innerHeight(state) {
    return state.innerHeight || window.innerHeight
  },
  
  breakpoint(state, getters)
  {
    for (let bp in Config.breakpoints) {
       if (getters.innerWidth >= Config.breakpoints[bp]) return bp
    }
  },
}

const mutations = {
  setAuthUser(state, user) {
    state.authUser = user
  },
  setInnerWidth(state, width) {
    state.innerWidth = width
  },
  setInnerHeight(state, height) {
    state.innerHeight = height
  },
  setMinViewHeight(state, height) {
    state.minViewHeight = height
  },
}

const actions = {

}

let store = new Vuex.Store({
  state,
  getters,
  mutations,
  actions
})

export default store

import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  authUser: null  
}

const getters = {

}

const mutations = {
  setAuthUser(state, user) {
    state.authUser = user
    // console.log('mutation', user)
  }
}

const actions = {
  setAuthUser({commit}, user) {
    commit('setAuthUser', user)
  }
}

let store = new Vuex.Store({
  state,
  getters,
  mutations,
  actions
})

export default store
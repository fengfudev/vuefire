
import Vue from 'vue'
import Vuex from 'vuex'
import Firebase from './firebase'

Vue.use(Vuex)

let listListener = ({data, table, db}) => { store.commit('setItems', data) }
let debugListener = ({data, table, db}) => { console.log('debug:', data, table, db) }
// Firebase.addListener('LIST', listListener);
// Firebase.addListener('LIST', debugListener);


const state = {
  tag: 'Learning vue, vuex and firebase',
  items: []
}

const getters = {

}

const mutations = {
  setItems(state, items) {
    state.items = items
  }
}

const actions = {
  use({commit}, dbName) {
    Firebase.use(dbName)
  },

  select({commit}, tableName) {
    Firebase.select(tableName, null, function(items) {
      // commit('setItems', items)
    })
  }
}

let store = new Vuex.Store({
  state,
  getters,
  mutations,
  actions
})

export default store
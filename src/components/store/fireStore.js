
import Vue from 'vue'
import Vuex from 'vuex'
import firebase from './firebase'

Vue.use(Vuex)

let database = firebase.database()
let db = 'database';
let table = 'table'
let orderBy = ''
let tableRef = ''
// let tableRef = database.ref("database/table")

function snapshotToMap(snapshot) {
  let result = [];
  snapshot.forEach(function (data) {
    let record = data.val()
    record['_id'] = data.key
    result[data.key] = record
  })
  return result
}

function snapshotToArray(snapshot) {
  var result = [];
  snapshot.forEach(function (data) {
    let record = data.val()
    record['_id'] = data.key
    result.push(record)
  })
  return result
}

const state = {
  tag: 'Learning vue, vuex and firebase',
  items: []
}

const getters = {

};

const mutations = {
  setItems(state, items) {
    state.items = items
  }
}

const actions = {
  use({commit}, dbname) {
    db = dbname
  },

  select({commit}, tablename) {
    table = tablename
    tableRef = database.ref(`${db}/${table}`)
    tableRef.orderByValue().on("value", function (snapshot) {
      let items = snapshotToArray(snapshot)
      commit('setItems', items)
      console.log('items:',items)
      // snapshot.forEach(function (data) {
      //   let record = data.val()
      //   record['_id'] = data.key;
      //   console.log("\nThe record is ", record)
      //   Object.keys(record).forEach(key => {
      //     console.log('The value of ' + key + ' is ' + record[key])
      //   })
      // });
    });
  }
}

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions
})
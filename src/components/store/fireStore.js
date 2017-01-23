
import Vue from 'vue'
import Vuex from 'vuex'
import firebase from './firebase'

Vue.use(Vuex)

let database = firebase.database()
let db = '';
let table = ''
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
  let result = [];
  snapshot.forEach(function (data) {
    let record = data.val()
    record['_id'] = data.key
    result.push(record)
  })
  return result
}

const state = {
  status: true,
  tag: 'Learning vue, vuex and firebase',
  items: []
}

const getters = {
  items(state) {
    return state.items
  }
}

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
    console.log('select:', `${db}/${table}`, db, table)
    tableRef.orderByValue().on("value", function (snapshot) {
      commit('setItems', snapshotToArray(snapshot))
      // console.log(snapshotToArray(snapshot))
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
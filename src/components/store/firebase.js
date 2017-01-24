import secretConfig from "../../secretConfig.js"

import firebase from 'firebase'

firebase.initializeApp(secretConfig.firebase);

let database = firebase.database()
let auth = firebase.auth()

let db = null
let table = null
let tableRef = null
let orderBy = null
let items = {}
let eventListeners = {}

function snapshotToArray(snapshot) {
  var result = [];
  snapshot.forEach(function (data) {
    let record = data.val()
    record['_id'] = data.key
    result.push(record)
  })
  return result
}

let Firebase = {
  use(dbName) {
    db = dbName
  },

  select(tableName, dbName = null, callback) {
    table = tableName
    if (dbName) db = dbName
    tableRef = database.ref(`${db}/${table}`)
    tableRef.orderByValue().on("value", function (snapshot) {
      if (!items[db]) items[db] = {};
      items[db][table] = snapshotToArray(snapshot)
      // if (Firebase.list) Firebase.list(items[db][table], table, db)
      Firebase.runListeners('LIST', {data: items[db][table], table: table, db: db})
      if (callback && typeof callback === 'function') callback(items[db][table])
    });    
  },

  items(tableName = table, dbName = db) {
    if (Firebase.list) Firebase.list(items[dbName][tableName], tableName, dbName)
    return items[dbName][tableName]
  },

  addListener(event, func) {
    if (!eventListeners[event]) eventListeners[event] = []
    let index = eventListeners[event].indexOf(func)
    if (index < 0 && func && typeof func === 'function') eventListeners[event].push(func)
    // console.log('add listener:', eventListeners[event])
  },

  removeListener(event, func) {
    if (!eventListeners[event]) eventListeners[event] = []
    eventListeners[event] = eventListeners[event].filter(fun => fun != func)
    // console.log('remove listener:', eventListeners[event])
  },

  setListeners(event, listeners = []) {
    eventListeners[event] = listeners
  },

  runListeners(event, data) {
    if (!eventListeners[event]) return;
    eventListeners[event].forEach(func => {func(data, table, db)})
  },

  getDb() { return db },

  getTable() { return table },
}

export {
  Firebase as default,
  firebase,
  database,
  auth
}

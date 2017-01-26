
import Vue from 'vue'
import Firebase from 'firebase'
import VueFire from 'vuefire'
import secretConfig from "../../secretConfig.js"

Vue.use(VueFire)

let fireApp = Firebase.initializeApp(secretConfig.firebase)
let fireDb = fireApp.database()
let baseRef = 'demo/'

let todoRef = fireDb.ref(baseRef + 'todo')
let noteRef = fireDb.ref(baseRef + 'note')

export default window.fireStore = {
  fireApp,
  fireDb,
  baseRef,
  todoRef,
  noteRef,
}
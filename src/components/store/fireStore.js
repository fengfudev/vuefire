
import Vue from 'vue'
import Firebase from 'firebase'
import VueFire from 'vuefire'
import secretConfig from "../../secretConfig.js" 
import store from './appStore'

Vue.use(VueFire)

let app = Firebase.initializeApp(secretConfig.firebase)
let db = app.database()
let auth = app.auth()
let baseRef = 'demo/'

let todos = db.ref(baseRef + 'todo')
let notes = db.ref(baseRef + 'note')


auth.onAuthStateChanged( user => {
  window.authUser = user
  store.dispatch('setAuthUser', user)
  console.log('Auth changed', user)
})

export default window.fireStore = {
  app,
  db,
  auth,
  baseRef,
  todos,
  notes,
}
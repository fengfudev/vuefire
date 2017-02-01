// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import Vue from 'vue'
import store from './components/store/appStore'
import fireStore from './components/store/fireStore'
import router from './router'
require( './initialize' )
// import 'jquery/dist/jquery.js'
import 'bootstrap/scss/bootstrap.scss'
import 'bootstrap/dist/js/bootstrap.js'

import App from './App'

/* eslint-disable no-new */
window.vm = global.vm = new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})

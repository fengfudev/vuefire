// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import store from 'components/store/fireStore'
import router from './router'

import App from './App'

/* eslint-disable no-new */
window.vm = new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})

let _ = require('lodash')
import store from 'components/store/appStore'
import Config from './config'

window.addEventListener('resize', _.debounce(handleResize, 200))
window.addEventListener('load', handleResize)

function handleResize(e) {
  // console.log('resize', e)
  store.commit('setInnerWidth', window.innerWidth)
  store.commit('setInnerHeight', window.innerHeight)
  store.commit('setMinViewHeight', window.utils.minViewHeight())  
}

window.utils = {
  breakpointUp(size) {
    return Config.breakpoints[size] ? store.getters.innerWidth > Config.breakpoints[size] : false
  },

  minViewHeight() {
    let navbar = document.getElementById('site-navbar')
    let footer = document.getElementById('site-footer')
    return (navbar && footer) ? window.innerHeight - navbar.clientHeight - footer.clientHeight : window.innerHeight;
  }
}
<template>
  <div id="app">
    <Site-Menu></Site-Menu>
    <Site-Header></Site-Header>

    <router-view></router-view>
    
    <Site-Footer></Site-Footer>
  </div>
</template>

<script>
import SiteMenu from './components/layout/Menu'
import SiteHeader from './components/layout/Header'
import SiteFooter from './components/layout/Footer'

export default {
  name: 'app',
  components: {
    SiteMenu,
    SiteHeader,
    SiteFooter
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

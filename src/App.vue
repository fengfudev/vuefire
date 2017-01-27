<template>
  <div id="vue-fire">
    <Site-Menu></Site-Menu>
    <!--<Site-Header></Site-Header>-->

    <div class="router-view-area">
      <router-view></router-view>
    </div>

    <Site-Footer></Site-Footer>
  </div>
</template>

<script>

import SiteMenu from './components/layout/Menu'
import SiteHeader from './components/layout/Header'
import SiteFooter from './components/layout/Footer'

export default {
  name: 'vue-fire',
  data() {
    return {
    }
  },  
  components: {
    SiteMenu,
    SiteHeader,
    SiteFooter
  }
}
</script>

<style>
#vue-fire {
  /*font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;*/
  padding-top: 54px;
  /*padding-top: 4rem;*/
}
.router-view-area {
  min-height: 300px;
}
.full-width {
  width: 100%;
}

.hr-text {
  line-height: 1em;
  position: relative;
  outline: 0;
  border: 0;
  color: black;
  text-align: center;
  height: 1.5em;
  opacity: .5;
}
.hr-text:before {
  content: '';
  background: linear-gradient(to right, transparent, #818078, transparent);
  position: absolute;
  left: 0;
  top: 50%;
  width: 100%;
  height: 1px;
}
.hr-text:after {
  content: attr(data-content);
  position: relative;
  display: inline-block;
  color: black;

  padding: 0 .5em;
  line-height: 1.5em;
  color: #818078;
  background-color: #fcfcfa;
}
</style>

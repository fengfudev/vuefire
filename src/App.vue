<template>
  <div id="vue-fire">
    <Site-Menu></Site-Menu>
    <!--<Site-Header></Site-Header>-->

    <div class="router-view-area" :style="{'min-height': minHeight+'px'}">
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
  computed: {
    minHeight() {
      return this.$store.state.minViewHeight
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

.full-width {
  width: 100%;
}
</style>

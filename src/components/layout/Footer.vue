<template>
  <Region id="site-footer" background="#777">

      <p class="float-right"><a href="#">Back to top</a></p>
      <p>&copy; 2017 Vuefire &middot; <a href="#">Privacy</a> &middot; <a href="#">Terms</a></p>

  </Region>  
</template>

<script>
  import Region from '../ui/Region'

  export default {
    name: "footer",
    
    data() {
      return {

      }
    },

    components: {
      Region
    },

  }  
</script>

<style scoped>
  .float-right {
    float: right;
  }
  .container {
    padding: 0;
  }
</style>
<template>
  <Region background="#777">
    <div class="container">
      <p class="float-right"><a href="#">Back to top</a></p>
      <p>&copy; 2017 Vuefire &middot; <a href="#">Privacy</a> &middot; <a href="#">Terms</a></p>
    </div>
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

<style>
  .float-right {
    float: right;
  }
  .float-left {
    float: left;
  } 
  footer {
    background: #CCC;
    padding-top: 10px;
  }
</style>
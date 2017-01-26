<template>
  <div class="home">
    <Region :background="color1" :color="color4">
      <h1>Home</h1>
    </Region>
    <Region :background="color2" :color="dark">
      <p style="padding: 10px">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur sapiente ipsum suscipit quod quam, unde, sit a neque voluptatum incidunt sint, maiores vero eaque laudantium! Veritatis molestias nulla repellendus et!</p>
    </Region>
    <Region :background="color3" :color="color4">
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur sapiente ipsum suscipit quod quam, unde, sit a neque voluptatum incidunt sint, maiores vero eaque laudantium! Veritatis molestias nulla repellendus et!</p>
    </Region>
    <Region :background="color4" :color="light">
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur sapiente ipsum suscipit quod quam, unde, sit a neque voluptatum incidunt sint, maiores vero eaque laudantium! Veritatis molestias nulla repellendus et!</p>
    </Region>
    <Region :background="color5">
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur sapiente ipsum suscipit quod quam, unde, sit a neque voluptatum incidunt sint, maiores vero eaque laudantium! Veritatis molestias nulla repellendus et!</p>
    </Region>
  </div>
</template>

<script>
  import Region from '../ui/Region'
  import Config from '../../config'

  export default {
    name: "home",

    data() {
      return {
        ...Config.color,
      }
    },

    components: {
      Region
    },

    methods: {

    }

  }  
</script>

<style>
  
</style>
<template>
  <div class="home">
    <Region background="cyan">
      <h1>Home</h1>
    </Region>
    <Region background="#CCC">
      <p style="padding: 10px">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur sapiente ipsum suscipit quod quam, unde, sit a neque voluptatum incidunt sint, maiores vero eaque laudantium! Veritatis molestias nulla repellendus et!</p>
    </Region>
    <Region background="red">
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur sapiente ipsum suscipit quod quam, unde, sit a neque voluptatum incidunt sint, maiores vero eaque laudantium! Veritatis molestias nulla repellendus et!</p>
    </Region>
    <Region background="blue">
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur sapiente ipsum suscipit quod quam, unde, sit a neque voluptatum incidunt sint, maiores vero eaque laudantium! Veritatis molestias nulla repellendus et!</p>
    </Region>
  </div>
</template>

<script>
  import Region from '../ui/Region'

  export default {
    name: "home",

    data() {
      return {

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
<template>
  <div class="region clearfix" :style="style">
      <div class="container" v-if="container">
        <slot></slot>
      </div>
      <div v-else>
        <slot></slot>
      </div>
  </div>
</template>

<script>
  export default {
    name: "region",
    
    data() {
      return {
        style : {
          background: this.background || 'white',
          color: this.color || 'black',
          // 'margin-top': '-10px'
          'padding-top': '1rem',
          'padding-bottom': '1px',
        }
      }
    },

    props: {
      background: String,
      color: String,
      container: {
        default: true,
        type: Boolean
      }
    },

  }  
</script>

<style scoped>

</style>
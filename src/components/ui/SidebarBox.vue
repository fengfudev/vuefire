<template>
  <div class="sidebar-box" :style="style">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    data() {
      return {
      }
    },
    computed: {
      minHeight() {
        return this.$store.state.minViewHeight
      },
      style() {
        return {
          height: '100%',
          background: this.background,
          minHeight: this.minHeight+'px'          
        }
      }
    },    
    props: {
      background: {
        default: '#AAA'
      }
    }
  }  
</script>

<style scoped>

</style>
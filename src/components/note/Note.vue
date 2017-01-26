<template>
  <Region class="note">
    <h1>Note</h1>
    <ul>
      <li v-for="note in notes">{{ note.text }}</li>
    </ul>
  </Region>
</template>

<script>
  import Region from '../ui/Region'
  
  export default {
    name: "note",
    
    data() {
      return {

      }
    },

    firebase: {
      notes: fireStore.notes
    },

    components: {
      Region
    },

    methods: {
      
    }

  }  
</script>

<style scoped>
  
</style>
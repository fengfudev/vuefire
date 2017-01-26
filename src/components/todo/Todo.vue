<template>
  <Region class="todo">
    <h1>Todo</h1>
    <ul>
      <li v-for="todo in todos">{{ todo.text }}</li>
    </ul>
  </Region>
</template>

<script>
  import Region from '../ui/Region'
  
  export default {
    name: "todo",

    data() {
      return {
        
      }
    },

    firebase: {
      todos: fireStore.todos
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
<template>
  <div class="todo container">
    <div class="row" style="{overflow: hidden;}">
      <div class="col-3">
        <sidebar-box :background="color1"></sidebar-box>
      </div>
      <div class="col-9">
        <h1>Todo</h1>
        {{innerWidth}} / {{innerHeight}} / {{breakpoint}} / {{ breakpointUp('md')}} <br>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam explicabo earum incidunt quam magni architecto sint rem aliquid? Quis, reprehenderit. At asperiores dolorem ipsam sunt debitis, quibusdam molestias nemo, doloremque?
        <ul>
          <li v-for="todo in todos">{{ todo.text }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  import Region from '../ui/Region'
  import SidebarBox from '../ui/SidebarBox'
  import Config from '../../config'
  import { mapGetters } from 'vuex'

  
  export default {
    name: "todo",

    data() {
      return {
        ...Config.color
      }
    },
    
    computed: {
      ...mapGetters([
        'innerWidth',
        'innerHeight',
        'breakpoint',
      ]),
    },

    firebase: {
      todos: fireStore.todos
    },

    components: {
      Region,
      SidebarBox
    },

    methods: {
      breakpointUp(size) {
        return utils.breakpointUp(size)
      },    
    }

  }  
</script>

<style scoped>
  
</style>
<template>
  <div class="todo" :class="{container: breakpointUp('md')}">
    <div class="row" style="{overflow: hidden;}">

      <div class="col-sm-3" v-if="breakpointUp('sm')">
        <sidebar-box :background="color1">
          <ul class="nav flex-column">
            <li class="nav-item">
              <router-link class="nav-link" to="/todo">Todos</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/todo/create">Create</router-link>
            </li>
          </ul>
        </sidebar-box>
      </div>

      <div v-if="!breakpointUp('sm')">
        <ul class="nav">
          <li class="nav-item">
            <a class="nav-link active" href="#">Todos</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Create</a>
          </li>
        </ul>
      </div>

      <div class="col-sm-9">
        <router-view></router-view>
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
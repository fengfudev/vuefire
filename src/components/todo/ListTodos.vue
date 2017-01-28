<template>
  <div class="list-todos">
    <h1>List Todos</h1>

    <div class="row gutters">
      <template v-for="(todo, index) in todos">
        <div class="col-sm-6 col-lg-4">
          <div class="card todo">
            <div class="card-header">
              {{todo.title}}
            </div>
            <div class="card-block">
              <p class="card-text">{{todo.description}}</p>
            </div>
            <div class="card-footer text-center">
              <a href="#" class="pull-left btn btn-outline-primary btn-sm" @click.prevent="mark(todo)">
                <i class="fa fa-check" aria-hidden="true" v-if="!todo.finished" title="mark as finished"></i>
                <i class="fa fa-ban" aria-hidden="true" v-else title="mark as not finished"></i>
              </a>
              <span :class="{highlight: !todo.finished}">{{todo.finished ? 'finished' : 'not finished'}}</span :class="{highlight: }">
              <a href="#" class="pull-right btn btn-outline-primary btn-sm">
                <i class="fa fa-pencil" aria-hidden="true" title="update this todo"></i>
              </a>
              <a href="#" class="pull-right btn btn-outline-danger btn-sm" @click.prevent="remove(todo)">
                <i class="fa fa-trash" aria-hidden="true" title="delete this todo"></i>
              </a>
            </div>            
            </div>            
          </div>
        </div>
        <!--<div class="clearfix" :style="{margin: '20px auto'}" v-if="needFix(index)"></div>-->
      </template>
    </div>

  </div>
</template>

<script>
  export default {
    data() {
      return {

      }
    },

    components: {
    },

    firebase: {
      todos: fireStore.todos
    },

    methods: {
      needFix(index) {
        console.log(index)
        return false
        // return (index % 3) == 2
      },

      mark(todo) {
        fireStore.todos.child(todo['.key']).update({finished: !todo.finished})
      },

      remove(todo) {
        fireStore.todos.child(todo['.key']).remove()
      }
    }

  }  
</script>

<style scoped>

.highlight {
  color: red;
}

.btn.pull-right {
  margin-right: 2px;
}

.list-todos {
  margin: 30px auto;
}

.todo {
  margin: 10px auto;
}

.gutters {
  margin-right: 0;
  margin-left: 0;
}

.gutters > [class*="col-"] {
    padding-right: 5px;
    padding-left: 5px;
}

</style>
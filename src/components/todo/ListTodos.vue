<template>
  <div class="list-todos">

    <!-- Modal -->
    <div class="modal fade" id="updateModal" tabindex="-1" role="dialog" aria-labelledby="updateModalLabel" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="updateModalLabel">Update todo</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <form>

              <div class="form-group row">
                <label for="title" class="col-sm-3 col-form-label">Title</label>
                <div class="col-sm-9">
                  <input v-model="currentTodo.title" required type="text" class="form-control" id="title">
                </div>
              </div>

              <div class="form-group row">
                <label for="description" class="col-sm-3 col-form-label">Description</label>
                <div class="col-sm-9">
                  <textarea v-model="currentTodo.description" class="form-control" id="description" rows="3"></textarea>
                </div>
              </div>

              <!--<div class="form-group row">
                <label for="dueAt" class="col-sm-3 col-form-label">Due date</label>
                <div class="col-sm-9">
                  <input v-model="currentTodo.dueAt" type="date" class="form-control" id="dueAt">
                  {{currentTodo.dueAt}}
                </div>
              </div>-->

              <div class="form-group row">
                <label for="due" class="col-sm-3 col-form-label">Due date</label>
                <div class="col-sm-9">
                  <date-picker :date="dueAt" class="form-control" id="due"> </date-picker>
                </div>
              </div>

            </form>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancel</button>
            <button type="button" class="btn btn-primary" data-dismiss="modal" @click="save">Save</button>
          </div>
        </div>
      </div>
    </div>
    
    <h1>List Todos</h1>  

    <div class="row gutters">
      <template v-for="(todo, index) in todos">
        <div class="col-sm-6 col-lg-4">
          <div class="card todo">
            <div class="card-header">
              <h5>{{todo.title}}</h5>
            </div>
            <div class="card-block">
              <p class="card-text">{{todo.description}}</p>
            </div>
            <div class="card-footer text-center">
              <a href="#" class="pull-left btn btn-outline-primary btn-sm" @click.prevent="mark(todo)">
                <i class="fa fa-check" aria-hidden="true" v-if="!todo.finished" title="mark as finished"></i>
                <i class="fa fa-ban" aria-hidden="true" v-else title="mark as not finished"></i>
              </a>
              <span :class="{highlight: !todo.finished}">{{todo.finished ? 'finished' : 'waiting'}}</span :class="{highlight: }">
              <a href="#" class="pull-right btn btn-outline-primary btn-sm" @click.prevent="update(todo)">
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
  import datePicker from 'vue-datepicker'

  export default {
    data() {
      return {
        currentTodo: {},
        dueAt: {
          time: ''
        },
        createdAt: {
          time: ''
        },
        // todos: []
      }
    },

    created() {
    },

    computed: {
      // todos() {
      //   let query;
      //   console.log(this.$route.query.todoRef)
      //   if (this.$route.query.todoRef === 'todosFinished') {
      //     query = fireStore.todos.orderByChild('finished').equalTo(true).limitToLast(100)
      //   } else if (this.$route.query.todoRef === 'todosWaiting') {
      //     query = fireStore.todos.orderByChild('finished').equalTo(false).limitToLast(100)
      //   } else {
      //     query = fireStore.todos.limitToLast(100)
      //   }
        
      //   try {
      //     this.$unbind('_todos')
      //   }
      //   catch (e){
      //   }
      //   finally {
      //     this.$bindAsArray('_todos', query)
      //   }
      //   return this._todos
      // }
      todos() {
        if (this.$route.query.todoRef === 'todosFinished') return this.todosFinished
        if (this.$route.query.todoRef === 'todosWaiting') return this.todosWaiting
        return this.todosAll
      }
    },

    components: {
      'date-picker': datePicker
    },

    props: ['todoRef'],

    firebase: {
      todosAll: fireStore.todos.limitToLast(100),
      todosFinished: fireStore.todos.orderByChild('finished').equalTo(true).limitToLast(100),
      todosWaiting: fireStore.todos.orderByChild('finished').equalTo(false).limitToLast(100)
    },

    methods: {
      needFix(index) {
        return false
        // return (index % 3) == 2
      },

      mark(todo) {
        fireStore.todos.child(todo['.key']).update({finished: !todo.finished})
      },

      remove(todo) {
        fireStore.todos.child(todo['.key']).remove()
      },

      update(todo) {
        // this.dueAt.time = (new Date(todo.dueAt)).toDateString ()
        let myDate = new Date(todo.dueAt)
        this.dueAt.time = `${myDate.getFullYear()}-${myDate.getMonth() + 1}-${myDate.getDate()}`
        this.currentTodo = todo
        $('#updateModal').modal({})
      },

      save() {
        console.log('save', this.dueAt.time)
        fireStore.todos.child(this.currentTodo['.key']).update({
          title: this.currentTodo.title,
          description: this.currentTodo.description,
          dueAt: (new Date(this.dueAt.time)).getTime()
        })
        // console.log(this.currentTodo, new Date(this.currentTodo.dueAt))
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

.card-footer {
  font-size: 0.5 rem;
}

.list-todos {
  margin: 30px auto;
}

.todo {
  margin: 10px auto;
  overflow: hidden;
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
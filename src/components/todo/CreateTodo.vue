<template>
  <div class="create-todo container">
    <div clss="row">
      <div class="col">
        <div class="card">
          <div class="card-header">
            <h3>Input your todo job</h3>
          </div>
          <div class="card-block">

            <div class="alert alert-danger" role="alert" v-if="errorMessage">
              <strong>Oh snap!</strong> {{errorMessage}}
            </div>
            <form>
              <div class="form-group row">
                <label for="title" class="col-sm-3 col-form-label">Title</label>
                <div class="col-sm-9">
                  <input v-model="title" required type="text" class="form-control" id="title">
                </div>
              </div>

              <div class="form-group row">
                <label for="description" class="col-sm-3 col-form-label">Description</label>
                <div class="col-sm-9">
                  <textarea v-model="description" class="form-control" id="description" rows="3"></textarea>
                </div>
              </div>

              <div class="form-group row">
                <label for="dueDate" class="col-sm-3 col-form-label">Due date</label>
                <div class="col-sm-9">
                  <input v-model="dueDate" required type="date" class="form-control" id="dueDate" placeholder="">
                </div>
              </div>

              <button @click.prevent="create" class="btn btn-primary full-width">Create</button>
            </form>
          </div>
        </div>
      </div>
    </div clss="row">
  </div>
</template>

<script>
  export default {
    data() {
      return {
        title: '',
        description: '',
        dueDate: null,
        errorMessage: null
      }
    },

    methods: {
      create() {
        fireStore.todoApp.create(this.title, this.description, this.dueDate)
        .then( (data) => {
          this.title = ''
          this.description = ''
          this.dueDate = null
          console.log('todo created', data)
        }, (error) => {
          this.errorMessage = error.message
          console.log('todo created error', error)
        })

      }
    }

  }  
</script>

<style scoped>
.create-todo {
  margin: 30px auto;
}  
</style>
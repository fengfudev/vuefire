<template>
  <div class="signup container">
    <div clss="row">
      <div class="col-md-8 offset-md-2 col-lg-6 offset-lg-3">
        <div class="card">
          <div class="card-header">
            Sign up
          </div>
          <div class="card-block">

            <div class="alert alert-danger" role="alert" v-if="errorMessage">
              <strong>Oh snap!</strong> {{errorMessage}}
            </div>
            <form>
              <div class="form-group row">
                <label for="email" class="col-sm-3 col-form-label">Email</label>
                <div class="col-sm-9 input-group">
                  <span class="input-group-addon"><i class="fa fa-envelope-o" aria-hidden="true"></i></span>
                  <input v-model="email" required type="email" class="form-control" id="email" placeholder="name@example.com">
                </div>
              </div>
              <div class="form-group row">
                <label for="password" class="col-sm-3 col-form-label">Password</label>
                <div class="col-sm-9 input-group">
                  <span class="input-group-addon"><i class="fa fa-key" aria-hidden="true"></i></span>
                  <input v-model="password" required type="password" class="form-control" id="password" placeholder="xxxxxxxx">
                </div>
              </div>
              <button @click.prevent="signup" class="btn btn-primary full-width">Sign up</button>
            </form>
          </div>
        </div>
      </div>
    </div clss="row">
  </div>
</template>

<script>
  export default {
    name: "signin",

    data() {
      return {
        email: '',
        password: '',
        errorMessage: null
      }
    },

    methods: {
      signup() {
        this.errorMessage = null
        // fireStore.auth.signInWithEmailAndPassword('user@example.com', 'password')
        fireStore.auth.createUserWithEmailAndPassword(this.email, this.password)
          .then((data) => {
            this.$router.push('/')
          }, (error) => {
            this.errorMessage = error.message
          })
      },

    }


  }  
</script>

<style scoped>

.signup {
  margin: 30px auto;
}

</style>
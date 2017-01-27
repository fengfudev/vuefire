<template>
  <div class="signin container">
    <div clss="row">
      <div class="col-md-8 offset-md-2 col-lg-6 offset-lg-3">
        <div class="card">
          <div class="card-header">
            Sign in
          </div>
          <div class="card-block">

            <div class="row justify-content-around">
              <div class="col-sm-4">
                <a @click="googleSignin" href="#" class="btn btn-danger full-width">
                  <i class="fa fa-google visible-xs"></i> Google
                </a>
              </div>
              <div class="col-sm-4">
                <a href="#" class="btn btn-primary full-width disabled">
                  <i class="fa fa-facebook visible-xs"></i> Facebook
                </a>
              </div>
              <div class="col-sm-4">
                <a href="#" class="btn btn-info full-width disabled">
                  <i class="fa fa-twitter visible-xs"></i> Twitter
                </a>
              </div>
            </div>

            <LineBreakText text="OR"></LineBreakText>

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
              <button @click.prevent="signin" class="btn btn-primary full-width">Sign in</button>
            </form>
          </div>
        </div>
      </div>
    </div clss="row">
  </div>
</template>

<script>
  import LineBreakText from '../ui/LineBreakText'
  export default {
    name: "signin",

    components: {LineBreakText},
    data() {
      return {
        email: '',
        password: '',
        errorMessage: null
      }
    },

    methods: {
      signin() {
        this.errorMessage = null
        // fireStore.auth.signInWithEmailAndPassword('user@example.com', 'password')
        fireStore.auth.signInWithEmailAndPassword(this.email, this.password)
          .then((data) => {
            this.$router.push('/')
          }, (error) => {
            this.errorMessage = error.message
          })
      },

      googleSignin() {
        this.errorMessage = null
        let firebase = fireStore.firebase
        let provider = new firebase.auth.GoogleAuthProvider()
        firebase.auth().signInWithPopup(provider).then( (result) => {
          // let token = result.credential.accessToken;
          // let user = result.user;
        
          this.$router.push('/')
        }).catch( (error) => {
          // let errorCode = error.code;
          // let errorMessage = error.message;
          // let email = error.email;
          // let credential = error.credential;

          this.errorMessage = error.message
        });
      }

    }


  }  
</script>

<style scoped>

.signin {
  margin: 30px auto;
}

.btn.disabled {
  background-color: #333;
}

</style>
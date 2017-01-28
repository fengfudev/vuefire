<template>
  <div id="site-menu">
      <nav id="site-navbar" class="navbar navbar-toggleable-md fixed-top navbar-inverse bg-inverse">
      <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <a class="navbar-brand" href="#">{{siteName}}</a>

      <div class="collapse navbar-collapse" id="navbarsExampleDefault">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item" :class="{active: $route.path === '/'}">
            <router-link class="nav-link" to="/">Home</router-link>
          </li>
          <li class="nav-item" :class="{active: $route.path.startsWith('/todo')}">
            <router-link class="nav-link" to="/todo">Todo</router-link>
          </li>
          <li class="nav-item" :class="{active: $route.path.startsWith('/note')}">
            <router-link class="nav-link" to="/note">Note</router-link>
          </li>
        </ul>
        <ul class="navbar-nav navbar-right">
          <li class="nav-item dropdown" v-if="user">
            <a class="nav-link dropdown-toggle" href="#" id="auth-user" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Hello, {{userName}}</a>
            <div class="dropdown-menu" aria-labelledby="auth-user">
              <router-link class="dropdown-item" to="/profile">Profile</router-link>
              <a class="dropdown-item" href="/signout" @click.prevent="signout">Sign out</a>
            </div>
          </li>
          <template v-if="!user">
            <li class="nav-item">
              <router-link class="nav-link" to="/signin">Sign in</router-link>
            </li> 
            <li class="nav-item">
              <form class="form-inline my-2 my-lg-0">
                <router-link class="signup-btn btn btn-outline-secondary my-2 my-sm-0" to="/signup">Sign up</router-link>
              </form>
            </li>          
          </template>
        </ul>
      </div>
    </nav>
  
  </div>       
</template>

<script>
  export default {
    name: "menu",
    
    mounted() {
    },

    data() {
      return {
        siteName: 'VueFire',
        selectedItem: ''
      }
    },

    computed: {
      user() {
        return this.$store.state.authUser
      },

      userName: function() {
        if (this.user) {
          return this.user.displayName ? this.user.displayName : this.user.email.split('@')[0];
        }
        return 'not logged on'
      }
    },

    methods: {
      signout() {
        fireStore.auth.signOut().then( () => {
          // console.log(this.$router)
          this.$router.push('/') 
        })
      },
      
      signin() {
        fireStore.auth.signInWithEmailAndPassword('user@example.com', 'password')
        .catch((err) => {
          console.log(err)
        })
        .then( (data) => {
          this.$router.push('/')
          console.log(data)
        })
      }
    }

  }  
</script>

<style scoped>

.signup-btn {
  color: white;
}
  
</style>
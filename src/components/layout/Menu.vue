<template>
  <div>
      <nav class="navbar navbar-toggleable-md fixed-top navbar-inverse bg-inverse">
      <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <a class="navbar-brand" href="#">{{siteName}}</a>

      <div class="collapse navbar-collapse" id="navbarsExampleDefault">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item" :class="{active: $route.path === '/'}">
            <router-link class="nav-link" to="/">Home</router-link>
          </li>
          <li class="nav-item" :class="{active: $route.path === '/todo'}">
            <router-link class="nav-link" to="/todo">Todo</router-link>
          </li>
          <li class="nav-item" :class="{active: $route.path === '/note'}">
            <router-link class="nav-link" to="/note">Note</router-link>
          </li>
        </ul>
        <ul class="navbar-nav navbar-right">
          <li class="nav-item dropdown" v-if="user">
            <router-link class="nav-link dropdown-toggle" to="#" id="auth-user" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Hello, {{userName}}</router-link>
            <div class="dropdown-menu" aria-labelledby="auth-user">
              <router-link class="dropdown-item" to="/profile">Profile</router-link>
              <a class="dropdown-item" href="/logout" @click="logout">Logout</a>
            </div>
          </li>
          <li class="nav-item" v-else>
            <a class="nav-link" href="#" @click="login">login</a>
            <!--<router-link class="nav-link" to="/login">login</router-link>-->
          </li>          
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
      logout() {
        fireStore.auth.signOut().then( () => this.$router.push('/') )
      },
      
      login() {
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
  
</style>
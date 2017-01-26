<!--<template>
  <div class="menu">
    <nav class="navbar navbar-inverse navbar-fixed-top">
      <div class="container">
        <div class="navbar-header">
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a class="navbar-brand" href="#">{{siteName}}</a>
        </div>
        <div id="navbar" class="navbar-collapse collapse">
          <ul class="nav navbar-nav">
            <li :class="{active: $route.path === '/'}"><router-link to="/">Home</router-link></li>
            <li :class="{active: $route.path === '/todo'}"><router-link to="/todo">Todo</router-link></li>
            <li :class="{active: $route.path === '/note'}"><router-link to="/note">Note</router-link></li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>-->

<template>
    <nav class="navbar navbar-toggleable-md navbar-inverse bg-inverse fixed-top">      
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
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="http://example.com" id="dropdown01" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropdown</a>
            <div class="dropdown-menu" aria-labelledby="dropdown01">
              <a class="dropdown-item" href="#">Action</a>
              <a class="dropdown-item" href="#">Another action</a>
              <a class="dropdown-item" href="#">Something else here</a>
            </div>
          </li>
        </ul>
        <form class="form-inline my-2 my-lg-0">
          <input class="form-control mr-sm-2" type="text" placeholder="Search">
          <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form> 
      </div>
    </nav>  
</template>

<script>
  export default {
    name: "menu",
    
    data() {
      return {
        siteName: 'VueFire',
        selectedItem: 'todo'
      }
    },

    methods: {
    }

  }  
</script>

<style scoped>
  
</style>
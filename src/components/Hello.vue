<template>
  <div class="hello">
    <h1>{{ tag }}</h1>
    <h2>Essential Links</h2>
    <h2>{{items}}</h2>
    <ul>
      <li><a href="https://vuejs.org" target="_blank">Core Docs</a></li>
      <li><a href="https://forum.vuejs.org" target="_blank">Forum</a></li>
      <li><a href="https://gitter.im/vuejs/vue" target="_blank">Gitter Chat</a></li>
      <li><a href="https://twitter.com/vuejs" target="_blank">Twitter</a></li>
      <br>
      <li><a href="http://vuejs-templates.github.io/webpack/" target="_blank">Docs for This Template</a></li>
    </ul>
    <h2>Ecosystem</h2>
    <ul>
      <li><a href="http://router.vuejs.org/" target="_blank">vue-router</a></li>
      <li><a href="http://vuex.vuejs.org/" target="_blank">vuex</a></li>
      <li><a href="http://vue-loader.vuejs.org/" target="_blank">vue-loader</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank">awesome-vue</a></li>
    </ul>
  </div>
</template>

<script>
import Firebase from './store/firebase'

export default {
  name: 'hello',

  beforeCreate() {
    // this.$store.dispatch('use', 'database')
    // this.$store.dispatch('select', 'table')
  },

  created() {
    Firebase.setListeners('LIST', [this.updateItems.bind(this)])
    // Firebase.addListener('LIST', this.updateItems)
    Firebase.select('table', 'database')
  },

  beforeDestroy() {
    Firebase.removeListener('LIST', this.updateItems)
  },

  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      items: ['test']
    }
  },

  computed: {
    // items() { return this.$store.state.items },
    tag() { return this.$store.state.tag }
  },

  methods: {
    updateItems({data}) {
      this.items = data
      // console.log('updateItems:', data)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>

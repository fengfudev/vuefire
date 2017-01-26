import Vue from 'vue'
import VueRouter from 'vue-router'

import Note from 'components/note/Note'
import Todo from 'components/todo/Todo'
import Home from 'components/home/Home'
import Signup from 'components/user/Signup'

Vue.use(VueRouter)

const routes = [
  { path: '/', component: Home },
  { path: '/todo', component: Todo },
  { path: '/note', component: Note },
  { path: '/signup', component: Signup },
]

export default new VueRouter({
  routes,
  mode: 'history',
})
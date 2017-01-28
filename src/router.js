import Vue from 'vue'
import VueRouter from 'vue-router'

import Note from 'components/note/Note'
import Todo from 'components/todo/Todo'
import CreateTodo from 'components/todo/CreateTodo'
import ListTodos from 'components/todo/ListTodos'
import Home from 'components/home/Home'
import Signup from 'components/user/Signup'
import Signin from 'components/user/Signin'

Vue.use(VueRouter)

const routes = [
  { path: '/', component: Home },
  { 
    path: '/todo', component: Todo,  children: [
      {
        path: '',
        component: ListTodos
      },
      {
        path: 'create',
        component: CreateTodo
      },
    ] 
  },
  { path: '/note', component: Note },
  { path: '/signup', component: Signup },
  { path: '/signin', component: Signin },
]

export default new VueRouter({
  routes,
  mode: 'history',
})
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    username:"Nguyễn Đức Anh",
    age:21,
    todos: [
      { id: 1, text: 'task 1', done: true },
      { id: 2, text: 'task 2', done: false },
      { id: 3, text: 'task 2', done: false }
    ]
  },
  getters: {
    doneTodos: state => {
      return state.todos.filter(todo => todo.done)
    },
    doneTodosCount: (state, getters) => {
      return getters.doneTodos.length
    },
    gettodobyId: (state)=>(id)=>{
      return state.todos.find(todo =>todo.id=== id)
    }
  },
  mutations: {
    // Khai báo mutations
    updateUsername (state,value){
      state.username = value
    }
  }
})

export default store
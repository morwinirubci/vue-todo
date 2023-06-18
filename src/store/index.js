import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    todos: [
      {
        id: 1,
        title: "Learn vue"
      },
      {
        id: 2,
        title: "Practice vue"
      },
      {
        id: 3,
        title: "Read vue"
      },
    ],
  },
  getters: {
    allTodos: (state) => state.todos,
  },
  mutations: {
    add_todo(state, todo) {
      state.todos.push(todo);
    },
    delete_todo(state, id) {
      state.todos = state.todos.filter((todo) => todo.id != id);
    },
    update_todo(state, todo) {
      let index = state.todos.findIndex(item => item.id == todo.id);
      if (index != -1) {
        state.todos[index] = todo;
      }

    },
  },
  actions: {
    addTodo({ commit }, todo) {
      commit('add_todo', todo);
    },
    deleteTodo({ commit }, id) {
      commit('delete_todo', id);
    },
    updateTodo({ commit }, todo) {
      commit('update_todo', todo);
    }
  },
  modules: {},
  plugins: [createPersistedState()],
});

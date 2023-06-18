<template>
  <div class="w-30">
    <div class="d-flex my-3 justify-content-between">
      <p v-if="!editing" class="w-50">{{ todo.title }}</p>
      <input
        :value="todoText"
        @change="todoTextChange"
        v-else
        type="text"
        class="col w-50 form-control"
      />
      <div>
        <button @click="updateTodoItem(todo)" class="btn btn-primary mx-2">
          {{ editing ? "Update" : "Edit" }}
        </button>
        <button @click="deleteTodo(todo.id)" class="btn btn-danger">
          Delete
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  props: {
    todo: {},
  },
  data() {
    return {
      todoText: "",
      editing: false,
    };
  },
  methods: {
    ...mapActions(["deleteTodo", "updateTodo"]),
    todoTextChange(e) {
      this.todoText = e.target.value;
    },
    updateTodoItem(todo) {
      this.editing = this.editing == true ? false : true;
      if (this.editing) {
        this.todoText = todo.title;
        this.updateTodo(todo);
      } else {
        todo.title = this.todoText;
      }
    },
  },
};
</script>

<style scoped>
</style>
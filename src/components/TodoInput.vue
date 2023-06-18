<template>
  <div>
    <div class="d-flex justify-content-between ">
      <input
        @change="todoTextChange"
        v-bind:value="todoText"
        class="form-control"
        type="text"
      />
      <button @click="addTodoItem" class="col-md-2  btn btn-primary">Add</button>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import { v1 } from "uuid";

export default {
  data() {
    return {
      todoText: "",
    };
  },
  methods: {
    ...mapActions(["addTodo"]),
    todoTextChange(e) {
      this.todoText = e.target.value;
    },
    addTodoItem() {
      this.addTodo({
        id: v1(),
        title: this.todoText,
      });
      this.todoText = "";
    },
  },
};
</script>

<style scoped>
</style>